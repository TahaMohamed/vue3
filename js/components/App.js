export default {
    template: `
        <section v-show="inProgressAssignments.length">
        <h2 class="font-bold mb-2">In progress</h2>
        <ul>
            <li v-for="assignment in inProgressAssignments" :key="assignment.id">
                <label>
                    <input type="checkbox" v-model="assignment.complete">
                    {{ assignment.assignment }}
                </label>
            </li>
        </ul>
    </section>
    <section class="mt-8" v-if="completedAssignments.length">
        <h2 class="font-bold mb-2">Completed</h2>
        <ul>
            <li v-for="assignment in completedAssignments" :key="assignment.id">
                <label>
                    <input type="checkbox" v-model="assignment.complete">
                    {{ assignment.assignment }}
                </label>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            assignments: [
                {assignment: 'Finish project', complete: false, id: 1},
                {assignment: 'Read chapter 4', complete: false, id: 2},
                {assignment: 'Turn in homework', complete: false, id: 3},
            ]
        }
    },
    computed: {
        inProgressAssignments() {
            return this.assignments.filter(a => !a.complete)
        },
        completedAssignments() {
            return this.assignments.filter(a => a.complete)
        },
    }
}