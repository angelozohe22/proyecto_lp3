


Vue.component('loginform', {
    template:
    `
        <div>

            <div id="formulario1" style="display: block">
                <form action="inicioSesion" method="post">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Usuario</label>
                        <input 
                            name="user" 
                            class="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Ejemplo: amorales357" 
                            style="font-size: 14px"
                        >
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input
                            name="password"
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            style="font-size: 14px"
                            placeholder="*****"
                        >
                    </div>
                    <button 
                        type="button"
                        class="btn btn-primary"
                        v-on:click="handleLogin()"
                    >Iniciar Sesión</button>
                </form>

                <div  v-if="displayError" class="alert alert-danger" role="alert">
                    "mensaje"
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            displayError: false,
            formInputs: {}
        }
    },
    methods: {
        handleLogin: function() {
            console.log('loging...')
        }
    }
})