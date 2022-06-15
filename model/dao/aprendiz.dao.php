<?php
    //require_once "../model/conexion.php";
    //require_once "../model/dto/user.dto.php";

    class AprendizModel{
        private $codigo;
        private $nombre;
        private $fechanaci;
        private $sexo;
        private $ciudad;

        public function __construct($objDtoAprediz){
            $this ->codigo      =  $objDtoAprediz -> getCodigo() ;
            $this ->nombre      =  $objDtoAprediz -> getNombre() ;
            $this ->fechanaci   =  $objDtoAprediz -> getFechanaci() ;
            $this ->sexo        =  $objDtoAprediz -> getSexo() ;
            $this ->ciudad      =  $objDtoAprediz -> getCiudad() ;
        }
        
        public function mldInsertAprendiz(){
            $sql  = "CALL spInsertAprendiz (?, ?, ?, ?);";
            $estado = false;
            try {
                $objCon = new Conexion();
                $stmt = $objCon->getConect() -> prepare($sql);
                $stmt ->  bindParam(1,  $this -> nombre,      PDO::PARAM_STR);
                $stmt ->  bindParam(2,  $this -> fechanaci,  PDO::PARAM_STR);
                $stmt ->  bindParam(3,  $this -> sexo,      PDO::PARAM_STR);
                $stmt ->  bindParam(4,  $this -> ciudad,  PDO::PARAM_STR);
                $estado = $stmt -> execute();
            } catch (PDOException $e) {
                echo "Error al insertar aprendiz " . $e ->getMessage();
            }
            return $estado;
        }

        public function mldSearchAllAprendiz(){
            $respon=false;
            $sql  = "call spSearchAllAprendiz()";
            try {
                $objCon = new Conexion();
                $stmt = $objCon->getConect() -> prepare($sql);
                $stmt -> execute();
                $respon = $stmt;
            } catch (PDOException $e) {
                echo "Ha ocurrido un error al 
                mostrar los datos en el dao " . $e -> getMessage() ;
            }//end try-catch
            return $respon;
        }//END SEARCHALLUSER

        public function mldEraseAprendiz(){
            $respon = false;
            $sql  = "call spDeleteAprendiz( ? )";
            try {
                $objCon = new Conexion();
                $stmt = $objCon->getConect() -> prepare($sql);
                $stmt ->  bindParam(1,  $this -> codigo,      PDO::PARAM_INT);
                $stmt -> execute();
                $respon = true;
            } catch (PDOException $e) {
                echo "Ha ocurrido un error al 
                mostrar los datos en el dao " . $e -> getMessage() ;
            }//end try-catch
            return $respon;
        }


    public function mldUpdateAprendiz(){
        $sql  = "CALL spUpdateAprendiz (?, ?, ?, ?, ?);";
        $estado = false;
        try {
            $objCon = new Conexion();
            $stmt = $objCon->getConect() -> prepare($sql);
            $stmt ->  bindParam(1,  $this -> codigo,      PDO::PARAM_INT);
            $stmt ->  bindParam(2,  $this -> nombre,      PDO::PARAM_STR);
            $stmt ->  bindParam(3,  $this -> fechanaci,  PDO::PARAM_STR);
            $stmt ->  bindParam(4,  $this -> sexo,      PDO::PARAM_STR);
            $stmt ->  bindParam(5,  $this -> ciudad,  PDO::PARAM_STR);

            $estado = $stmt -> execute();
        } catch (PDOException $e) {
            echo "Error al modfiicar usuarios " . $e ->getMessage();
        }
        return $estado;
    }
}//END CLASS
?>