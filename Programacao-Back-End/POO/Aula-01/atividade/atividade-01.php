<?php

class Cadeira {

    public $cor;
    public $material;
    public $pernas;
    public $textura;
    public $marca;

    public function sentar(){
        return "Você sentou na cadeira de cor ".$this->cor;
    }

    public function apoiar(){
        return "Você se apoiou na cadeira de marca ".$this->marca;
    }

    public function subir(){
        return "Você subiu na cadeira feita de ".$this->material;
    }
}

$cadeiraVerdeAgua = new Cadeira();
$cadeiraVerdeAgua->cor = "Verde Agua";
echo $cadeiraVerdeAgua->sentar();


$cadeiraAzul = new Cadeira();
$cadeiraAzul->marca = "Flexform";
echo "<br>";
echo $cadeiraAzul->apoiar();


$cadeiraPreta = new Cadeira();
$cadeiraPreta->material = "Pano";
echo "<br>";
echo $cadeiraPreta->subir();