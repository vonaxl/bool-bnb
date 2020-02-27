@extends('layouts.app')
@section('content')
<div class="container hero">
    <div class="row text-center mt-4 border rounded bg-success p-2">
        <div class="col-12">
            <h1 class="text-white">
                <i class="far fa-check-circle text-white"></i> Transazione avvenuta con successo
            </h1>
        </div>
    </div>
        <div class="row text-center border rounded bg-light p-2">
            <div class="col-12">
                <h3>L'appartamento <b>{{$apartment -> title}}</b> è stato sponsorizzato e sarà visibile nella vetrina home per
                    @if ($apartment -> sponsored == 1)
                    24 ore
                    @elseif($apartment -> sponsored == 2)
                    72 ore
                    @elseif($apartment -> sponsored == 3)
                    144 ore
                    @endif
                </h3>
            </div>
        </div>

        <div class="row text-center mt-5">
            <div class="col-12">
                <a class="btn btn-light mb-3" href="{{route("home")}}" role="button">Torna alla home</a>
            </div>
        </div>

    </div>
    @endsection