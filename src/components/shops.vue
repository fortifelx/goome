<template>
    <div class="col-12">
        <div class="row">
        </div>
        <div class="row">
            <div class="col-2">
                <figure class="figure new_product_ilu">
                    <img v-show="value.img" alt="Основное фото товара"
                         class="img-thumbnail" :src="value.img">
                    <img v-show="!value.img" src="/static/iconic/svg/aperture.svg"
                         alt="Загрузите фото" class="img-thumbnail">
                    <figcaption class="figure-caption">og.image</figcaption>
                </figure>
                <div class="input-group mb-3 product_upload_image">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Загрузить</span>
                    </div>
                    <div class="custom-file">
                        <input @change="previewSeoImg" type="file"
                               class="custom-file-input" id="inputGroupFile987">
                        <label class="custom-file-label" for="inputGroupFile987">
                            </label>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addonvideo">Название</span>
                    </div>
                    <input type="text" ref="shopsName" :value="value.name" @input="getData()" class="form-control" placeholder="Название" aria-label="Название" aria-describedby="basic-addonvideo">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-adddonvideo">Адрес</span>
                    </div>
                    <input type="text" ref="shopsAddress" :value="value.address" @input="getData()" class="form-control" placeholder="Адрес" aria-label="Адрес" aria-describedby="basic-adddonvideo">
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Описание</span>
                    </div>
                    <textarea ref="shopsDescription" :value="value.description" @input="getData()" class="form-control" aria-label="With textarea"></textarea>
                </div>
            </div>
            <div class="col-3">
                <button @click="pub = !pub" v-if="!pub" type="button" class="btn btn-success">
                    Публиковать
                </button>
                <button @click="pub = !pub" v-if="pub" type="button" class="btn btn-secondary">
                    Скрыть
                </button>
                <button @click="$emit('delete')" type="button" class="btn btn-outline-danger">Удалить</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ourshops",
        props: ['value'],
        data: function(){
            return {
                img : this.value.img,
                pub: this.value.published,
            }
        },
        methods: {
            previewSeoImg: function(event) {
                var input = event.target;

                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    var vm = this;
                    reader.onload = function(e) {
                        vm.value.img = e.target.result;
                        vm.img = vm.value.img;

                    }
                    reader.readAsDataURL(input.files[0]);
                }
            },
            getData(){
                this.$emit('input', {
                    name : this.$refs.shopsName.value,
                    address : this.$refs.shopsAddress.value,
                    description : this.$refs.shopsDescription.value,
                    published : this.pub,
                    img : this.img,
                })
            }
        },
    }
</script>

<style scoped>

</style>