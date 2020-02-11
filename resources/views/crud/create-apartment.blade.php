@extends('layouts.app')
@section('content')

<div class="container">
  <form action="{{route('apartment.store')}}" method="post">
    @csrf
    @method('POST')
    <div class="form-group">
      <label for="title">Title:</label>
      <input class="form-control" type="text" name="title" value="">
    </div>
    <div class="form-group">
      <label for="address">address:</label>
      <input class="form-control" type="text" name="address" value="">
    </div> 
    <div class="form-group">
      <label for="description">description:</label>
      <input class="form-control" type="text" name="description" value="">
    </div>
    <div class="form-group">
      <label for="img">img:</label>
      <input class="form-control" type="text" name="img" value="">
    </div>
    <div class="form-group">
      <label for="roomNum">Room Num:</label>
      <input class="form-control" type="text" name="roomNum" value="">
    </div>
    <div class="form-group">
      <label for="bedNum">Bed numbers:</label>
      <input class="form-control" type="text" name="bedNum" value="">
    </div>
    <div class="form-group">
      <label for="mQ">Metri quadrati:</label>
      <input class="form-control" type="text" name="mQ" value="">
    </div>
    <div class="form-group">
      <label for="wcNum">Toilette:</label>
      <input class="form-control" type="text" name="wcNum" value="">
    </div>
    <div class="form-group col-8">
      <label for="services">Services:</label> <br>
      @foreach ($services as $service)
      <input name="services[]" type="checkbox"  value="{{$service->id}}">{{$service->name}}
      @endforeach
  </div> 
    <button type="submit">SALVA</button>
  </form>
</div>
        
@endsection