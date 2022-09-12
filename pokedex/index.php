<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Pokedex </title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
</head>
<body>
 
    <div class="container">
    <div class="card-deck"> 


        <?php
            $url = "https://www.canalti.com.br/api/pokemons.json";

            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            $pokemons = json_decode(curl_exec($ch));

            foreach ($pokemons->pokemon as $p):    
        ?>
        
        <div class="col-6 col-md-4"> 
            <div class="card" style="width: 18rem; margin-top: 2rem;">
            <img src="<?=$p->img?>" alt="<?=$p->img?>">
                    <div class="card-body">
                        <h5 class="card-title"> <?= $p->name?> </h5>
                        <p class="card-text">Details Pokemon: </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Altura: <?= $p->height?></li>
                        <li class="list-group-item">Largura: <?= $p->weight?></li>
                        <li class="list-group-item">Tipo: 
                            <?php 
                                if(count($p->type)):
                                    foreach($p->type as $tipo){
                                        echo $tipo . ', ';
                                    }
                                else:
                                    echo "nao";
                                endif;
                            ?>
                        </li>

                        <li class="list-group-item">Fraqueza: 
                            <?php 
                                if(count($p->weaknesses)):
                                    foreach($p->weaknesses as $fraqueza){
                                        echo $fraqueza . ', ';
                                    }
                                else:
                                    echo "nao";
                                endif;
                            ?>
                        </li>                        
                    </ul>
            </div>    
        </div>


        <?php
        endforeach;
        ?>

    </div>
    </div>

</body>
</html>