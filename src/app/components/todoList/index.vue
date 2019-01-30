<template>
    <div>
        <ul class="todo-list">
            <li v-for="(todo, idx) in todoList" v-bind:class="{ 'is-detail': todo.isDetail }" :key="'todo_' + idx">
                <a href="" v-if="!todo.isDetail" v-on:click="changeDetail(idx, $event)">
                    <div class="todo-list-info">
                        <span class="todo-list-tag"><v-icon name="tag" scale="0.8"></v-icon>{{ todo.tag }}</span>
                        <span class="todo-list-date">{{ todo.date }}</span>
                    </div>
                    <div>
                        <span><v-icon name="check-circle" scale="1"></v-icon></span>
                        <span><v-icon name="angle-double-down" scale="1"></v-icon></span>
                        <span class="todo-list-title">{{ todo.title }}</span>
                    </div>
                </a>
                <a href="" v-else>
                    <div class="todo-list-info">
                        <span class="todo-list-tag"><v-icon name="tag" scale="0.8"></v-icon>{{ todo.tag }}</span>
                        <span class="todo-list-date">{{ todo.date }}</span>
                    </div>
                    <span class="todo-list-title">detail</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

const date = new Date();
const today = date.toLocaleDateString();

export default {
    name: 'todoList',
    data: () => {
        return {
            todoList: [
                {
                    id: 0,
                    title: 'ToDo list',
                    tag: 'プライベート',
                    date: today,
                    isDetail: false
                },
                {
                    id: 1,
                    title: 'ToDo2',
                    tag: 'プライベート',
                    date: today,
                    isDetail: false
                },
                {
                    id: 2,
                    title: 'ToDo3',
                    tag: 'プライベート',
                    date: today,
                    isDetail: false
                }
            ],
            changeDetail (idx: number, e: Event) {
                e.preventDefault();
                this.todoList[idx].isDetail = true;
            }
        }
    }
}

</script>

<style scoped lang="scss">
.todo-list {
    padding: 24px 0;
    li {
        height: 80px;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: $box-shadow-base;
        transition: all .3s;
        overflow: hidden;
        &:not(:last-child) {
            margin-bottom: 8px;
        }
        &.is-detail {
            height: 160px;
        }
        a {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            align-content: center;
            width: 100%;
            height: 100%;
            padding: 0 24px;
        }
    }
    .todo-list-info {
        display: flex;
        width: 100%;
        font-size: .5rem;
        margin-bottom: 8px;
        .todo-list-tag {
            width: 100%;
        }
        .todo-list-date {
            width: 100%;
            text-align: right;
        }
    }
    .todo-list-title {
        width: 100%;
    }
}
</style>
