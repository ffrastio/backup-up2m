<template>
    <div id="login">
        <form @submit.prevent="handleSubmit">
            <div class="container mx-auto py-32 md:py-30">
                <div class="flex h-full justify-center items-center pt-6">
                    <div class="lg:w-1/3 px-4">
                        <img
                            src="@/assets/img/logo.png"
                            alt="Logo Up2m"
                            class="mb-6 mx-auto"
                        />
                        <form method="POST" @submit="sendLogin">
                            <div
                                class="border rounded-lg text-left px-4 py-4 shadow-lg"
                            >
                                <div class="mb-4">
                                    <label class="block font-bold mb-2"
                                        >Email</label
                                    >
                                    <input
                                        type="text"
                                        placeholder="Masukkan Email Anda . . ."
                                        class="border rounded-lg px-4 py-2 w-full focus:outline-none"
                                        v-model="email"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block font-bold mb-2"
                                        >Password</label
                                    >
                                    <input
                                        type="Password"
                                        placeholder="Masukkan Password Anda . . ."
                                        class="border rounded-lg px-4 py-2 w-full focus:outline-none"
                                        v-model="password"
                                    />
                                </div>
                                <button
                                type="submit"
                                    class="flex items-center justif-center border rounded-lg font-semibold ml-auto bg-primary text-white px-4 py-1"
                                >
                                    Login
                                </button>
                                <div class="mt-4">
                                    <p class="mb-3 font-bold">*Note :</p>
                                    <p>
                                        - Pendaftaran hubungi <strong>Admin UP2M</strong> 
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "login",
    components: {
    },
    data() {
        return {
            errorMsg: {
                email: null,
                password: null
            },
            email: "",
            password: ""
        };
    },
    methods: {
        sendLogin: function(e){
            e.preventDefault()
            var that = this
            axios.post('http://localhost:8001/api/login',{
                email: this.email,
                password: this.password
            })
            .then(res => res.data)
            .then(function(res){
                if(res.status == 'success')
                {
                    that.$cookies.set('uid',res.content.access_token)
                    // router.push({path: '/tes'})
                    // that.$router.push('/tes')
                    window.location = '/'
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped></style>
