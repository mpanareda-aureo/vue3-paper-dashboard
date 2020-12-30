
import { ref } from 'vue'

const layout = ref("");

export default function useLayout() {
    setLayout("dashboardLayout");

    function setLayout(new_layout: string) {
        layout.value = new_layout;
    }

    return { layout, setLayout }
}