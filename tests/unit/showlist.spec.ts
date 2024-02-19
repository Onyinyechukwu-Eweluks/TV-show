import { mount, flushPromises, VueWrapper } from "@vue/test-utils";
import TvShowsList from "@/components/tv-show/TvShowsList.vue";
import axios from "axios";
import { ComponentPublicInstance } from "vue";
import { Show } from "@/types/tv-shows";

const mockShowList = [
  { id: 1, genres: ["Drama", "Science-Fiction", "Thriller"] },
  { id: 2, genres: ["Action", "Crime", "Science-Fiction"] },
];

// jest.spyOn(axios, "get");
const mockAxios = jest.fn(() => Promise.resolve({ data: [] as Show[] }));
jest.mock("axios", () => ({
  get: () => mockAxios(),
}));

const factory = () => {
  return mount(TvShowsList);
};
let wrapper: VueWrapper<any, ComponentPublicInstance<{}, any>>;

describe("TvShowList.vue", () => {
  beforeEach(() => {
    wrapper = factory();
  });
  afterEach(() => jest.clearAllMocks());

  it("displays the text", () => {
    const list = wrapper.find("[data-test='show']");
    expect(wrapper.text()).toContain("Shows");
  });

  it("calls api data", async () => {
    await wrapper.trigger("load");
    expect(mockAxios).toHaveBeenCalledTimes(1);
  });
});
