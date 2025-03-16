let app = new Vue({
    el: '#app',

    data() {
        return {
            columns: {
                columnOne: [
                    {
                        title: 'Не писять',
                        tasks: ['Писять', 'Писять', 'Писять'],
                    },
                    {
                        title: 'Приготовить',
                        tasks: ['Спагетти', 'Сосиски', 'Не готовить'],
                    }
                ],
                columnTwo: [
                    {
                        title: 'Приготовить',
                        tasks: ['Спагетти', 'Сосиски', 'Не готовить'],
                    }
                ],
                columnThree: [
                    {
                        title: 'Приготовить',
                        tasks: ['Спагетти', 'Сосиски', 'Не готовить'],
                    },
                    {
                        title: 'Приготовить',
                        tasks: ['Спагетти', 'Сосиски', 'Не готовить'],
                    },
                    {
                        title: 'Приготовить',
                        tasks: ['Спагетти', 'Сосиски', 'Не готовить'],
                    }
                ],
            }
        }
    },

    methods: {
        addTask() {
            this.columns.columnOne.push(
                {
                    title: 'Не писять',
                    tasks: ['hjg', 'ljhj', 'kjh']
                }
            )
        }
    },

    watch: {
        columns: {
            handler(value) {
                localStorage.columns = JSON.stringify(value)
            },
            deep: true
        }
    },
    mounted() {
        this.columns = JSON.parse(localStorage.columns ?? JSON.stringify(
            {
                columnOne: [],
                columnTwo: [],
                columnThree: [],
            }
        ))
    }
// todo залить в гит пж не забудь
})