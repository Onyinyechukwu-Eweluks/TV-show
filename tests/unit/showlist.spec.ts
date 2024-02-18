import { mount } from "@vue/test-utils";
import TvShowsList from "@/components/tv-show/TvShowsList.vue";

describe("TvShowList.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(TvShowsList);
    const list = wrapper.find("[data-test='show']");
    expect(wrapper.text()).toContain("Shows");
  });
});
