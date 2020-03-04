@extends('layouts.app')
@section('content')

    <div class="container mt-2">
        {{-- DIV MESSAGES --}}
        
        <div class="row p-3 justify-items-center" >
            <div class="col text-center">
                <h2>Inbox</h2>
            </div>
<<<<<<< HEAD
            <div class="col-12 messages mt-4">
                @foreach ($apartments as $apartment)
                @if (!$apartment -> messages ->count() == 0)
                    <p class="text-center mb-3">Nome Appartamento:<b> {{$apartment->title}}</b></p>
                    @foreach ($apartment -> messages as $message)
                    <div class="apartmentMsg row p-3 align-items-center">
                        <div class="col-4">
                            {{-- <strong><strong>{{$apartment->title}} {{$apartment->id}} </strong></strong> --}}
                            <a href="{{route('apartmentShow', $apartment -> id)}}" class="w-100">
                                <img src="{{asset('images/'.$apartment -> image)}}" alt="aparment logo" style="width:100%">
                            </a>
=======
            @foreach ($apartments as $apartment)
            <div class="row justify-content-center p-2 mb-2">
                <div class="col-md-12 d-flex  justify-content-center">
                    <div class="col-12 card mb-3 col-md-6 apartment">
                        <a class="m-3" href="{{route('apartmentShow', $apartment -> id)}}">
                            <img src="{{asset('images/'.$apartment -> image)}}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{$apartment -> title}}</h5>
                                <p class="card-text">{{$apartment -> address}}</p>
                                <p class="card-text"><small class="text-muted">Aggiunto : {{$apartment -> created_at}}</small></p>
                            </div>
                        </a>
                    </div>
                    <div class="col-12 col-md-4 d-flex flex-column justify-content-around p-3">
                        <div class="modifica">
                            <h2 class>Operazione appartamento</h2>
                            <div class="d-flex justify-items-around align-items-center">
                                <a class="col btn btn-primary mb-3 " href="{{route("apartment.edit" , $apartment -> id)}}" role="button" title="modifica annuncio"><i class="fas fa-edit"></i></a>
                                {{-- <i id="delete" class=" col btn btn-danger mb-3 mx-2" href="{{route("apartment.delete" , $apartment -> id)}}" role="button" title="elimina annuncio"><i class="fas fa-trash"></i></i> --}}
                                <a  class="delete col btn btn-danger mb-3 mx-2" href="#" title="elimina annuncio"><i class="fas fa-trash"></i></a>
                                <script>
                                    $('.delete').on('click', function(e) {
                                    var del = prompt('Vuoi cancellare questo appartamento? S/N');
                                    if(del=='s' || del=='S'){
                                        console.log('gey');
                                        window.location.href = "{{URL::to(route("apartment.delete" , $apartment -> id))}}" ;
                                    }
                                });
                                </script>
                                <a class=" col btn btn-warning mb-3" href="{{route("apartment.sponsor" , $apartment -> id)}}" role="button" title="sponsorizza annuncio"><i class="fas fa-star"></i></a>
                            </div>
>>>>>>> master
                        </div>
                        <div class="col-8 ">
                            <p>Da: {{$message->email}} </p>
                            <p>Titolo: {{$message->title}} [{{$message->id}}] </p>
                            <p>Messaggio: {{$message->body}} </p>
                        </div>
<<<<<<< HEAD
                    </div>
                    @endforeach
                @else
                    {{-- <p>0 messaggi</p> --}}
                @endif
                @endforeach
            </div>
        </div>





        <div class="row justify-content-around align-items-around my-3">
            <div class="col-xs-12 text-center">

                <h2>Appartamenti:</h2>
            </div>
            <div class="col-xs-12 text-center">

                <a class="btn btn-success" href="{{route("apartment.create")}}" role="button">Inserisci un nuovo appartamento</a>
            </div>
        </div>
        @foreach ($apartments as $apartment)
            <div class="row align-items-center">
                <div class="card mb-3 col-md-9 apartment">
                    <a class="m-3" href="{{route('apartmentShow', $apartment -> id)}}">
                        <img src="{{asset('images/'.$apartment -> image)}}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{$apartment -> title}}</h5>
                            <p class="card-text">{{$apartment -> address}}</p>
                            <p class="card-text">{{$apartment -> description}}</p>
                            <p class="card-text"><small class="text-muted">Aggiunto : {{$apartment -> created_at}}</small></p>
=======
                        <div class="div">
                            <h2>Messaggi</h2>
                            <div class="messages">
                                @if (!$apartment -> messages ->count() == 0)
                                    @foreach ($apartment-> messages as $message)
                                        <div class="col border">
                                            <p>Da: {{$message->email}} </p>
                                            <p>Titolo: {{$message->title}} </p>
                                            <p>Messaggio: {{$message->body}} </p>
                                        </div>
                                    @endforeach
                                @else
                                    <p>Questo appartamento non ha messaggi</p>
                                @endif
                            </div>
>>>>>>> master
                        </div>
                    </a>
                </div>
                <div class="col-md-3">
                    <div class="col-12 d-flex justify-items-around align-items-center">

                        <a class="col btn btn-primary mb-3 " href="{{route("apartment.edit" , $apartment -> id)}}" role="button" title="modifica annuncio"><i class="fas fa-edit"></i></a>
                        <a class=" col btn btn-danger mb-3 mx-2" href="{{route("apartment.delete" , $apartment -> id)}}" role="button" title="elimina annuncio"><i class="fas fa-trash"></i></a>
                        <a class=" col btn btn-warning mb-3" href="{{route("apartment.sponsor" , $apartment -> id)}}" role="button" title="sponsorizza annuncio"><i class="fas fa-star"></i></a>
                    </div>
                    {{-- <a class="btn btn-secondary mb-3" href="{{route("apartment.charts" , $apartment -> id)}}" role="button">statistiche annuncio</a> --}}

                    {{-- <a class="btn btn-success" href="{{route("apartment.test" , $apartment -> id)}}" role="button">test annuncio</a> --}}

                    @if ($apartment -> sponsored > 0)
                        <p class="green">Questo annuncio è sponsorizzato</p>
                    @else
                        <p class="red">Questo annuncio non è sponsorizzato</p>
                    @endif
                    {{-- SE L'APPARTAMENTO E' SPONSORIZZATO --}}
                    @if ($apartment -> visible == 0)
                        <p class="green">Questo annuncio è nascosto</p>
                    @else
                        <p class="red">Questo annuncio è pubblico</p>
                    @endif
                </div>
        </div>
        @endforeach
            
        
    </div>
<<<<<<< HEAD
=======
    <script>
        
        if (!apartmentsMsgCheck) {
            $('#msgCounter').html('Non hai ancora ricevuto messaggi');
        };
        
        
    </script>
>>>>>>> master
@endsection