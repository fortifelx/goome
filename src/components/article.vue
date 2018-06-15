<template>
    <tr class="product">
        <th scope="row">{{ article.id }}</th>
        <td>
            <div class="custom-control mr-sm-2 dark">
                <input type="checkbox" class="custom-control-input"
                       :id="article.id+'customControlAutosizing'">
                <label class="custom-control-label"
                       :for="article.id+'customControlAutosizing'"></label>
            </div>
        </td>
        <td>
            <img class="article_img img-thumbnail img-fluid"
                 v-bind:src="article.img" alt="">
        </td>
        <td>{{ article.title }}</td>
        <td>{{ article.description }}</td>
        <td>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">{{ article.views }}<img src="/static/iconic/svg/eye.svg" alt=""></span>
                    <span class="input-group-text">{{ article.like }}<img src="/static/iconic/svg/thumb-up.svg" alt=""></span>
                </div>
                <div class="input-group-append">
                    <span class="input-group-text">{{ article.shares }}<img src="/static/iconic/svg/share.svg" alt=""></span>
                </div>
            </div>
        </td>

        <!--<td>{{ article.tags }}</td>-->
        <td>
            <div class="btn-group-vertical" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info">Смотреть</button>
                <button type="button" @click="changeArticle(article)" class="btn btn-warning">Редактировать</button>
                <button @click="publishArticle(article)" v-if="!article.published" type="button" class="btn btn-success">
                    Опубликовать
                </button>
                <button @click="publishArticle(article)" v-if="article.published" type="button" class="btn btn-secondary">
                    Снять с публикации
                </button>
                <button type="button" class="btn btn-danger">Удалить</button>
            </div>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "articletable"
    }
</script>

<style scoped>

</style>