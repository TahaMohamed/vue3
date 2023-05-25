export default {
    template: `
         <li>
            <label>
                <input type="checkbox" v-model="assignment.complete">
                {{ assignment.assignment }}
            </label>
        </li>
    `,
    props:{
        assignment: Object
    }
}