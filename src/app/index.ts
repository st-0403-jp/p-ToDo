import Vue from 'vue';

export default {
    data: () => {
        return {
            message: 'メッセージです'
        }
    },
    template: `
    <div>
        <p>{{ message }}</p>
    </div>
    `
}
