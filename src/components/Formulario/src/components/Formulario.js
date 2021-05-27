
export default {
    name: 'src-components-formulario',
    components: {},
    props: [],
    data () {
      return {
        formData : this.getInicialData(),
        formState: {},
        nameLengthMin : 5,
        nameLengthMax: 15,
        ageMin: 18,
        ageMax: 120,
        users: []
      }
    },
    computed: {
  
    },
    mounted () {
  
    },
    methods: {
        getInicialData() {
            return {
                name: '',
                age: '',
                email: ''
            }
        },
        send() {
            this.users.push(this.formData)
            this.formData = this.getInicialData()
            this.formState._reset()
        }
    }
} 