import { mount, VueWrapper } from "@vue/test-utils";
import TvShowsList from "@/components/tv-show/TvShowsList.vue";
import { ComponentPublicInstance } from "vue";
import { Show } from "@/types/tv-shows";

const mockAxios = jest.fn(() => Promise.resolve({ data: [] as Show[] }));
jest.mock("axios", () => ({
  get: () => mockAxios(),
}));

const factory = () => {
  return mount(TvShowsList);
};
let wrapper: VueWrapper<any, ComponentPublicInstance<object, any>>;

describe("TvShowList.vue", () => {
  beforeEach(() => {
    wrapper = factory();
  });
  afterEach(() => jest.clearAllMocks());

  it("displays the text", () => {
    wrapper.find("[data-test='show']");
    expect(wrapper.text()).toContain("Shows");
  });

  it("calls api data", async () => {
    await wrapper.trigger("load");
    expect(mockAxios).toHaveBeenCalledTimes(1);
  });
});
