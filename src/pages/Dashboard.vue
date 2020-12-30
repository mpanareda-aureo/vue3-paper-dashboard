<template>
  <!--Stats cards-->
  <div class="row">
    <div
      class="col-lg-3 col-md-6 col-sm-6"
      v-for="stats in dashboardData.statsCards"
      :key="stats.title"
    >
      <stats-card>
        <template #icon>
          <div class="icon-big text-center icon-warning">
            <i :class="`${stats.icon} text-${stats.type}`"></i>
          </div>
        </template>
        <div class="numbers">
          <p class="card-category">{{ stats.title }}</p>
          <p class="card-title">{{ stats.value }}</p>
          <p></p>
        </div>
        <template #footer>
          <hr />
          <div class="stats">
            <i :class="stats.footerIcon"></i>
            {{ stats.footerText }}
          </div>
        </template>
      </stats-card>
    </div>
  </div>

  <!--Charts-->
  <div class="row">
    <div class="col-md-12">
      <chart-card>
        <template #header>
          <h5 class="card-title">Users Behavior</h5>
          <p class="card-category">24 Hours performance</p>
        </template>
        <!-- <canvas id="chartHours" width="400" height="100"></canvas> -->
        <template #footer>
          <hr />
          <div class="stats">
            <i class="fa fa-history"></i> {{ dashboardData.usersText }}
          </div>
        </template>
      </chart-card>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <chart-card>
        <template #header>
          <h5 class="card-title">Email Statistics</h5>
          <p class="card-category">Last Campaign Performance</p>
        </template>
        <!-- <canvas id="chartEmail"></canvas> -->
        <template #footer>
          <!-- <div class="legend">
            <i class="fa fa-circle text-primary"></i> Opened
            <i class="fa fa-circle text-warning"></i> Read
            <i class="fa fa-circle text-danger"></i> Deleted
            <i class="fa fa-circle text-gray"></i> Unopened
          </div> -->
          <hr />
          <div class="stats">
            <i class="fa fa-calendar"></i> {{ dashboardData.emailText }}
          </div>
        </template>
      </chart-card>
    </div>
    <div class="col-md-8">
      <chart-card>
        <template #header>
          <h5 class="card-title">NASDAQ: AAPL</h5>
          <p class="card-category">Line Chart with Points</p>
        </template>
        <!-- <canvas id="speedChart" width="400" height="100"></canvas> -->
        <template #footer>
          <!-- <div class="chart-legend">
            <i class="fa fa-circle text-info"></i> Tesla Model S
            <i class="fa fa-circle text-warning"></i> BMW 5 Series
          </div> -->
          <hr />
          <div class="stats">
            <i class="fa fa-check"></i> {{ dashboardData.nasdaqText }}
          </div>
        </template>
      </chart-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StatsCard from '../components/Cards/StatsCard.vue'
import ChartCard from '../components/Cards/ChartCard.vue'
import useDashboard from '../use/dashboard'

export default defineComponent({
  components: {
    StatsCard,
    ChartCard,
  },

  setup() {
    const { dashboardData } = useDashboard()

    return {
      dashboardData,
    }
  },
})
</script>
