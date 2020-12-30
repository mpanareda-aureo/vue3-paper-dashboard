import { computed, ref } from "vue";

export default function useDashboard() {

    // Default values for dashboard
    const dashboardData = ref({
        statsCards: [
            {
                type: "warning",
                icon: "nc-icon nc-globe",
                title: "Capacity",
                value: "-",
                footerText: "Updated now",
                footerIcon: "fa fa-refresh"
            },
            {
                type: "success",
                icon: "nc-icon nc-money-coins",
                title: "Revenue",
                value: "-",
                footerText: "Last day",
                footerIcon: "fa fa-calendar-o"
            },
            {
                type: "danger",
                icon: "nc-icon nc-vector",
                title: "Errors",
                value: "-",
                footerText: "In the last hour",
                footerIcon: "fa fa-clock-o"
            },
            {
                type: "primary",
                icon: "nc-icon nc-favourite-28",
                title: "Followers",
                value: "-",
                footerText: "Updated now",
                footerIcon: "fa fa-refresh"
            }
        ],
        usersText: '-',
        nasdaqText: '-',
        emailText: '-'
    });

    // Fetch the data from API
    fetchData()

    async function fetchData() {
        const response = await fetch('http://localhost:3030/');
        const json = await response.json();
        dashboardData.value.statsCards.map(item => {
            item.value = json.stats[item.title.toLowerCase()];
            if (item.title === 'Revenue') {
                item.value = formatMoney(item.value);
            }
            return item;
        });
        dashboardData.value.usersText = json.users;
        dashboardData.value.nasdaqText = json.nasdaq;
        dashboardData.value.emailText = json.email;
    }

    function formatMoney(value: string) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        })
        return formatter.format(parseFloat(value))
    }

    return {
        dashboardData: computed(() => dashboardData.value),
    }
}