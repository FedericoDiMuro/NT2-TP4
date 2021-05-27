<template>
    <section class="src-components-inicio">
        <div class="jumbotron">
            <h2>Consigna</h2>
            <hr>
            <p>
                Realizar un desarrollo web front-end empleando Vue CLI que presente las siguientes vistas
                manejadas por un router, seleccionadas desde una barra de navegación:
                <br>
                1) Un formulario basado en vue-form que contenga 3 campos: nombre, edad e email. Este debe
                tener validaciones mediante carteles de: campos requeridos, nombre entre 5 y 15 caracteres, edad
                entre 18 y 120 años e email válido. Los datos válidos ingresados por el formulario, se deben
                representar en un tabla por debajo del mismo, en el mismo momento del ingreso.
                <br>
                2) Realizar un componente que pida los objetos almacenados en un recurso de mockapi.io llamado
                usuarios, que contengan datos aleatorios con las claves: nombre, email y número de teléfono. Se
                representarán en una tabla en la vista.
                Para la comunicación con mockapi.io utilizar XMLHttpRequest, fetch y axios.
                Utilizar Bootstrap 4 como framework css del sitio.
            </p>
        </div>
    </section>
</template>

<script lang="js">

export default {
    name:'src-components-inicio',
    props: [],
    mounted(){

    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
    .src-components-inicio {
        
    }

    .jumbotron {
        background-color: rgb(236 86 86);
        color: rgb(242 255 132);
    }
</style>