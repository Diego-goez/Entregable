<?php

    class Aprendiz{

        private $codigo;
        private $nombre;
        private $fechanaci;
        private $sexo;
        private $ciudad;

        /*GETTERS*/
        public function getCodigo(){
            return $this->codigo;
        }
        public function getNombre(){
            return $this->nombre;
        }
        public function getFechanaci(){
            return $this->fechanaci;
        }
        public function getSexo(){
            return $this->sexo;
        }
        public function getCiudad(){
            return $this->ciudad;
        }
        /*SETTING */
        public function setCodigo ( $codigo ){
            $this -> codigo = $codigo;
        }
        public function setNombre ( $nombre ){
            $this -> nombre = $nombre;
        }
        public function setFechanaci ( $fechanaci ){
            $this -> fechanaci = $fechanaci;
        }
        public function setSexo ( $sexo ){
            $this -> sexo = $sexo;
        }
        public function setCiudad ( $ciudad ){
            $this -> ciudad = $ciudad;
        }
    }

?>