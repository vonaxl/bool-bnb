@extends('layouts.app')
@section('content')
<div class="container sucsponsapt">
    <div class="row text-center mt-4 border rounded bg-success p-2">
        <div class="col-12">
            <h1> - TRANSAZIONE AVVENUTA CON SUCCESSO - <br>
                L'appartamento <b>{{$apartment -> title}}</b> è stato sponsorizzato e sarà visibile nella vetrina home per
                @if ($apartment -> sponsored == 1)
                24 ore!
                @elseif($apartment -> sponsored == 2)
                72 ore!
                @elseif($apartment -> sponsored == 3)
                144 ore!
                @endif
            </h1>
        </div>
    </div>

    <div class="row text-center mt-5">
        <div class="col-12">
            <a class="btn btn-warning mb-3" href="{{route("home")}}" role="button">Torna alla home</a>
        </div>
    </div>

</div>
@endsection