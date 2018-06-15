<template>
    <div class="col-12 image_wrapper">
            <img v-show="value" alt="иконка"
                 class="img-thumbnail" :src="value">
            <img v-show="!value" src="/static/iconic/svg/aperture.svg"
                 alt="Загрузите фото" class="img-thumbnail">
        <div class="input-group mb-3 product_upload_image">
            <div class="custom-file">
                <input @change="previewImg" type="file"
                       class="custom-file-input" id="inputGroupFile9837">
                <label class="custom-file-label" for="inputGroupFile9837">
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "preview",
        props: ['value'],
        data: function () {
            return {
                img: this.value,
            }
        },
        methods: {
            previewImg: function (event) {
                this.$emit('input' , this.img);
                var input = event.target;
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    var vm = this;
                    reader.onload = function (e) {
                        vm.img = e.target.result;
                        // vm.img = vm.value;
                        vm.$emit('input' , vm.img);
                    }
                    this.$emit('input' , this.img);
                    reader.readAsDataURL(input.files[0]);
                }

            }
        }
    }
</script>

<style scoped>
.product_upload_image {
    display: inline-block;
    width: 60%;
    float: right;
}
.product_upload_image .custom-file {
    width: 100%;
}
    .image_wrapper img {
        width: 40%;
    }
</style>