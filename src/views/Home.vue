<script>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
} from "@mdi/js";
import * as chartConfig from "@/components/Charts/chart.config.js";
import LineChart from "@/components/Charts/LineChart.vue";
import MainSection from "@/components/MainSection.vue";
import TitleBar from "@/components/TitleBar.vue";
import HeroBar from "@/components/HeroBar.vue";
import CardWidget from "@/components/CardWidget.vue";
import CardComponent from "@/components/CardComponent.vue";
import ClientsTable from "@/components/ClientsTable.vue";
import Notification from "@/components/Notification.vue";
import JbButton from "@/components/JbButton.vue";
import CardTransactionBar from "@/components/CardTransactionBar.vue";
import CardClientBar from "@/components/CardClientBar.vue";
import TitleSubBar from "@/components/TitleSubBar.vue";
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

const titleStack = ref(["Admin", "Dashboard"]);

const chartData = ref(null);

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData();
};

onMounted(() => {
  fillChartData();
});

const store = useStore();

const clientBarItems = computed(() => store.state.clients.slice(0, 3));

const transactionBarItems = computed(() => store.state.history.slice(0, 3));

const darkMode = computed(() => store.state.darkMode);
export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };
    const theme = ref("dark");
    return { center, theme };
  },
});
</script>

<template>

  <GoogleMap
    api-key="AIzaSyC_6hw4jl5QTB3gOgP--RC_ZGL6odyoWSo"
    style="width: 100%"
    class="h-[600px] z-10"
    :center="center"
    :styles="theme"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>
