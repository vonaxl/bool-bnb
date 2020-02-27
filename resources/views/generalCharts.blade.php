@extends('layouts.app')

@section('content')
<div class="container">
    @if ($apartments->count() > 0)
    <div class="row align-items-center justify-content-around p-5">
        
        <h2>Statistiche generali degli appartamenti</h2>
        <div class="col-12 col-md-9 col-md-offset-3 mt-3">
            <canvas id="myChart" width="450" height="450"></canvas>
        </div>

    </div>
        
    @else
    <h3>Statistiche non disponibili, in quanto non possiedi ancora nessun appartamento. </h3>
    @endif
    

    <script>
        
        var apartments = @json($apartments);
        var messagesCount = @json($messagesCount);
        var apartmentsName = [];
        var apartmentsData = [];

        apartments.forEach(apartment => {
            apartmentsName.push(apartment['title']);
            apartmentsData.push(apartment['view']);
        });
        console.log(apartmentsData);
        
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: apartmentsName,
                datasets: [{
                    label: 'Visualizzazioni',
                    backgroundColor:'rgba(255, 99, 132, 0.2)',
                    data: apartmentsData,
                    borderWidth: 1
                },
                {
                    label: "Messaggi",
                    backgroundColor: "skyblue",
                    data: messagesCount
                }
            ]},
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        </script>
    
@endsection