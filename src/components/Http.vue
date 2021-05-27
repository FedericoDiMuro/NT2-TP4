<template>
    <section class="src-components-http">
        <div class="jumbotron">
            <h2>Obtener usuarios</h2>
            <hr>
            <button class="btn btn-danger my-3 mr-3" @click="getUsersXML()">Llamada usando XMLHttpRequest</button>
            <button class="btn btn-warning my-3 mr-3" @click="getUsersFetch()">Llamada usando Fetch</button>
            <button class="btn btn-success my-3 mr-3" @click="getUsersAxios()">Llamada usando Axios</button>
            
            <button class="btn btn-info my-3" @click="clear()"> Limpiar tabla</button>

            <div v-if="users.length" class="table-responsive">
                <table class="table table-dark">
                    <tr>
                        <th v-for="(column, index) in getColumns" :key="index">{{column}}</th>
                    </tr>
                    <tr v-for="(user, index) in users" :key="index">
                        <td v-for="(column, index) in getColumns" :key="index">{{user[column]}}</td>
                    </tr>
                </table>
            </div>
            <h4 v-else class="alert alert-warning">No se encontraron usuarios</h4>
        </div>
    </section>
</template>

<script>
export default {
    name: 'src-components-http',
    props: [],
    mounted() {

    },
    data() {
        return {
            url: 'https://60af31f85b8c300017debe4c.mockapi.io/usuarios',
            users: []
        }
    },
    methods: {
        getUsersXML(){
            let xhr = new XMLHttpRequest()
            xhr.open('get', this.url)
            xhr.addEventListener('load', () => {
                if(xhr.status == 200) {
                    let response = JSON.parse(xhr.response)
                    this.users = response
                }
                else {
                    console.error(`Error en GET -> status: ${xhr.status}`)
                }
            })
            xhr.addEventListener('error', e => {
                console.error('Error XMLHttpRequest ->', e)
            })
            xhr.send()
        },

        getUsersFetch(){
            fetch(this.url)
                .then(datos => datos.json())
                    .then(response => {
                        this.users = response
                    }).catch(error => console.error('Error Fetch ->',error))
        },

        getUsersAxios(){
            this.axios(this.url)
            .then(response => {
                console.log(response)
                this.users = response.data
            })
            .catch(error => console.log('Error Axios ->',error))
        },

        clear(){
            this.users = []
        }

    },
    computed: {
        getColumns() {
            return Object.keys(this.users[0])
        }
    }
}
</script>

<style scoped lang="css">
    .src-components-http{

    }
    .jumbotron {
        background-color: rgb(189, 200, 221);
        color: rgb(2, 2, 128);
    }

    hr {
        background-color: #333;
    }
</style>