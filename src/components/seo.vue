<template>
    <div class="col-12">
        <div class="row">
            <div class="col-8">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon071">og.title</span>
                    </div>
                    <input ref="seoTitle" :value="value.title" @input="getData()" type="text" class="form-control" placeholder="og.title" aria-label="og.title" aria-describedby="basic-addon071">
                </div>
            </div>
            <div class="col-4">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon072">og.type</span>
                    </div>
                    <input ref="seoType" :value="value.type" @input="getData()" type="text" class="form-control" placeholder="og.type" aria-label="og.type" aria-describedby="basic-addon072">
                </div>
            </div>
            <div class="col-6">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addonurl">og.url</span>
                    </div>
                    <input ref="seoUrl" :value="value.url" @input="getData()" type="text" class="form-control" placeholder="og.url" aria-label="og.url" aria-describedby="basic-addonurl">
                </div>
            </div>
            <div class="col-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addonlocale">og.locale</span>
                    </div>
                    <input ref="seoLocale" :value="value.locale" @input="getData()" type="text" class="form-control" placeholder="og.locale" aria-label="og.locale" aria-describedby="basic-addonlocale">
                </div>
            </div>
            <div class="col-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addonsite_name">og.site_name</span>
                    </div>
                    <input ref="seoSiteName" :value="value.site_name" @input="getData()" type="text" class="form-control" placeholder="og.site_name" aria-label="og.site_name" aria-describedby="basic-addonsite_name">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <figure class="figure new_product_ilu">
                    <img v-show="value.image" alt="Основное фото товара"
                         class="img-thumbnail" :src="value.image">
                    <img v-show="!value.image" src="/static/iconic/svg/aperture.svg"
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
                            Выбрать файл </label>
                    </div>
                </div>
            </div>
            <div class="col-9">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addonvideo">og.video</span>
                        </div>
                        <input type="text" ref="seoVideo" :value="value.video" @input="getData()" class="form-control" placeholder="og.video" aria-label="og.video" aria-describedby="basic-addonvideo">
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">og.description</span>
                        </div>
                        <textarea ref="seoDescription" :value="value.description" @input="getData()" class="form-control" aria-label="With textarea"></textarea>
                    </div>
            </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "seo",
        props: ['value'],
        data: function(){
            return {
                img : this.value.image,
            }
        },
        methods: {
            previewSeoImg: function(event) {
                var input = event.target;

                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    var vm = this;
                    reader.onload = function(e) {
                        vm.value.image = e.target.result;
                        vm.img = vm.value.image;

                    }
                    reader.readAsDataURL(input.files[0]);
                }
            },
            getData(){
                this.$emit('input', {
                    title : this.$refs.seoTitle.value,
                    url : this.$refs.seoUrl.value,
                    video : this.$refs.seoVideo.value,
                    site_name : this.$refs.seoSiteName.value,
                    description : this.$refs.seoDescription.value,
                    locale : this.$refs.seoLocale.value,
                    type : this.$refs.seoType.value,
                    image : this.img,

                })
            }
        },
        components: {

        }
    }
</script>

<style scoped>

</style>