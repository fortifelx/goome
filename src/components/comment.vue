<template>
    <tr class="comment">
        <th scope="row">{{ id }}</th>
        <td>
            <div class="custom-control mr-sm-2 dark">
                <input type="checkbox" class="custom-control-input"
                       :id="id+'customControlAutosizing'">
                <label class="custom-control-label"
                       :for="id+'customControlAutosizing'"></label>
            </div>
        </td>
        <td>
            <figure class="figure">
                <figcaption class="figure-caption">Магазин: {{ productShop }}
                </figcaption>
                <img class="product_img img-thumbnail img-fluid figure-img"
                     v-bind:src="productImg" alt="">
                <figcaption class="figure-caption">{{ productName }}
                </figcaption>
                <figcaption class="figure-caption">Цена: от {{ productPrice }} руб.
                </figcaption>
                <figcaption class="figure-caption">
                    <img v-for="n in productRating" src="/static/iconic/svg/star.svg" alt="">
                    {{ productLike }}<img src="/static/iconic/svg/thumb-up.svg" alt="">
                </figcaption>
            </figure>
        </td>
        <td>
            <figure class="figure">
                <figcaption class="figure-caption">
                    {{ name}}
                </figcaption>
                <img class="comment_img img-thumbnail img-fluid figure-img"
                     v-bind:src="avatar" alt="">
                <figcaption class="figure-caption">Instagram: {{ instagram }}
                </figcaption>
            </figure>
        </td>
        <td>{{ date }}</td>
        <td>{{ content }}</td>
        <td><img v-for="n in rating" src="/static/iconic/svg/star.svg" alt=""></td>
        <td>
            <div class="btn-group-vertical" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info">Смотреть</button>
                <button type="button" class="btn btn-warning">Редактировать</button>
                <button @click="$emit('publish')" v-if="!published" type="button" class="btn btn-success">
                    Разрешить
                </button>
                <button @click="$emit('publish')" v-if="published" type="button" class="btn btn-secondary">
                    Запретить
                </button>
                <button type="button" class="btn btn-danger">Удалить</button>
            </div>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "comment",
        props: [
            'target',
            'id',
            'published',
            'avatar',
            'name',
            'instagram',
            'productImg',
            'productName',
            'productPrice',
            'productRating',
            'productLike',
            'productShop',
            'rating',
            'date',
            'content'],
        data() {
            return {
            }
        }

    }

</script>

<style scoped>

</style>