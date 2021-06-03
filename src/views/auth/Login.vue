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
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "login",
    components: {
    },
    data() {
        return {
            email: "",
            password: ""
        };
    },
};
</script>

<style lang="scss" scoped></style>
