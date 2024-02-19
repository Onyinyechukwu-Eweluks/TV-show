import { VueWrapper, shallowMount } from "@vue/test-utils";
import DashboardComp from "@/components/tv-show/DashbordComp.vue";
import TvShowsList from "@/components/tv-show/TvShowsList.vue";

describe("Dashboard page", () => {
  it("displays list of shows initial", () => {
    const wrapper = shallowMount(DashboardComp);
    const tvShowList = wrapper.findComponent(TvShowsList);
    expect(tvShowList.exists()).toBe(true);
  });

  it("changes shows displayed onclick", async () => {
    const wrapper = shallowMount(DashboardComp);
    const inputEl = wrapper.find("input");
    const buttonEl = wrapper.find("button");
    inputEl.element.value = "fbi";
    await buttonEl.trigger("click");
  });
});
