@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        <div id="searchBar"class="row p-5 search-section justify-content-center align-items-center" style="display: none">
            <div class="form-box p-3 col-ms-8">
                <form action="{{route('apartment.search')}}" method="post">
                    @csrf
                    @method('POST')
                    <div class="form-group">
                        <label for="address">Dove vuoi andare?</label>
                        <input type="text" name="address" id="address" class="form-control input-lg text-center" autocomplete="off" placeholder="{{$address}}" required/>
                        <div id="addressList">
                        </div>
                    </div> 
                    <div class="form-group row">
                        <div class="col-4">
                            <label for="roomNum">Numero Stanze:</label>
                            <input type="number" name="roomNum" id="" class="form-control" autocomplete="off" value ="1"/>
                        </div>
                        <div class="col-4">
                            <label for="bedNum">Numero Letti:</label>
                            <input type="number" name="bedNum" id="" class="form-control" autocomplete="off" value ="1"/>
                        </div>
                        <div class="col-4">
                            <label for="address">Radius in km:</label>
                            <input type="number" name="radius" id="radius" class="form-control" value ="20"autocomplete="off"/>
                        </div>
                    </div>
                    <div class="form-group position">
                        <input type="text" name="latitude" id="latitude"/>
                        <input type="text" name="longitude" id="longitude"/> 
                    </div>
                    <span class="form-group col-8 py-2">
                        <label for="services">Servizi:</label> <br>
                        @foreach ($services as $service)
                        <input class="mr-1"name="services[]" type="checkbox"  value="{{$service->id}}">{{$service->name}}
                        @endforeach
                    </span> 
                    <button type="submit" class="btn btn-primary col-4 ">CERCA</button>
                </form>
            </div>
        </div>
        

        <div class="mt-3">
            <h2 class="row justify-content-center">Appartamenti in evidenza</h2>
            @if ($apartmentsAdvert -> isEmpty())
                <h6 class="row justify-content-center"">Non ci sono appartamenti sponsorizzati</h6>          
            @endif
        </div>
        <div class="row justify-content-center">
            <div id="myCarousel" class="col-md-6 carousel slide" data-ride="carousel">
                {{-- <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                </ol> --}}
                <div class="carousel-inner">
                
                    @foreach($apartmentsAdvert as $key => $apartment)

                    <div class="carousel-item {{$key == 0 ? 'active' : '' }}">  
                        <div class="box mx-3 card mb-3 testclass">
                            <a class="m-3" href="{{route('apartmentShow', $apartment -> id)}}">
                                <img src="{{asset('images/'.$apartment -> image)}}" class="card-img-top imgstyle" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">{{$apartment -> title}}</h5>
                                    <p class="card-text ellipsis">{{$apartment -> address}}</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Aggiunto : {{$apartment -> created_at}}</small>
                                </div>
                            </a>
                        </div>
                    </div>
                    @endforeach
                </div>
                <a class="carousel-control-prev" href="#myCarousel" role="button"  data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true">     </span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>

        <div class="container p-2">
            <div class="row p-5 justify-content-center">
                @if($apartments == null )
                    <div class="row align-items-center justify-content-center mt-3">
                        <div class="col-8 text-center">

                            <h2>
                                Mi dispiace non ci sono appartamenti nella zona (prova ad allargare l'area della ricerca)
                            </h2>
                        </div>
                        
                        <img src="https://cdn.dribbble.com/users/1651691/screenshots/5336717/404_v2.png" alt="">
                    </div>
                    
                @else
                    <div>
                        <h2 class="text-center mt-3">Risultati ricerca</h2>
                        <div class="container-fluid">

                            <div class="row">
                                
                                <h6 class=" col-12 col-sm-10 m-auto text-center bg-info rounded p-2" style="line-height: 1.9;">

                                    Stai cercando case nell'arco di <span class="font-weight-bold">{{$searchParam[1]}}</span> km da <span class="font-weight-bold">{{$searchParam[0]}}</span> con almeno <span class="font-weight-bold">{{$searchParam[4]}}</span> camera/e ed almeno <span class="font-weight-bold">{{$searchParam[5]}}</span> posto/i letto. 
                                    @if(!$servicesQuery == null)
                                    Con i seguenti servizi: 
                                    @foreach ($servicesQuery as $serviceQuery)
                                    @if($serviceQuery === '1' )
                                    <span class="font-weight-bold">Wi-fi</span>
                                    @elseif($serviceQuery === '2' )</span>
                                    <span class="font-weight-bold">Posto macchina
                                        @elseif($serviceQuery=== '3' )
                                        <span class="font-weight-bold">Piscina</span>
                                        @elseif($serviceQuery === '4' )
                                        <span class="font-weight-bold">Portineria</span>
                                        @elseif($serviceQuery === '5' )
                                        <span class="font-weight-bold">Sauna</span>
                                        @elseif($serviceQuery === '6' )
                                        <span class="font-weight-bold">Vista mare</span>
                                        @endif
                                        @endforeach
                                        @endif
                                </h6> 
                                <div class=" col-12  col-sm-2 d-flex mt-1  mt-md-0 ">
                                        <button id="newSearch" type="submit" class=" mx-auto align-self-center row btn btn-primary ">Nuova ricerca</button>
                                </div>
                                    
                            </div>
                        </div>
                        <div class=" mt-3 card-deck d-flex justify-content-center align-items-center  flex-wrap">
                            {{-- if sponsored --}}
                            @foreach ($apartments as $apartment)
                            <div class="apartment col-xs-12">
                                <div class="{{ ($apartment -> sponsored > 0) ? "sponsored" : "" }} box mx-3 card mb-3 " style="width:300px; height: 400px;" >
                                    <a class="m-3 mx-auto" href="{{route('apartmentShow', $apartment -> id)}}">
                                        <img src="{{asset('images/'.$apartment -> image)}}" class="card-img-top imgstyle" alt="..." ">
                                        <div class="card-body">
                                            <h5 class="card-title">{{$apartment -> title}}</h5>
                                            <p class="card-text ">{{$apartment -> address}}</p>
                                        </div>
                                        
                                    </a>
                                </div>
                            </div>
                            @endforeach
                            
                        </div>
                    </div>
                @endif
                
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function(){
            
            $("button").click(function(){
                //$("#searchBar").show();
                $("#searchBar").fadeIn("fast");
                
                
            }); 
        });    
    
    </script>
    

@endsection

