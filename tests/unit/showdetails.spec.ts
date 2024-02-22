import { mount, VueWrapper } from "@vue/test-utils";
import TvShowDetails from "@/components/tv-show/TvShowDetails.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router";
import { ComponentPublicInstance } from "vue";
import { Show } from "@/types/tv-shows";

const mockAxios = jest.fn(() => Promise.resolve(mockGetList));
jest.mock("axios", () => ({
  get: () => mockAxios(),
}));

const mockGetList = {
  data: {
    id: 1,
    url: "https://www.tvmaze.com/shows/1/under-the-dome",
    name: "Under the Dome",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Science-Fiction", "Thriller"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2013-06-24",
    ended: "2015-09-10",
    officialSite: "http://www.cbs.com/shows/under-the-dome/",
    schedule: {
      time: "22:00",
      days: ["Thursday"],
    },
    rating: {
      average: 6.5,
    },
    weight: 98,
    network: {
      id: 2,
      name: "CBS",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.cbs.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 25988,
      thetvdb: 264492,
      imdb: "tt1553656",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
    },
    summary:
      "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    updated: 1704794065,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/1",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/185054",
      },
    },
  },
};

// jest.spyOn(axios, "get").mockResolvedValue(mockGetList);

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const factory = () => {
  return mount(TvShowDetails, {
    global: {
      plugins: [router],
    },
    props: {
      searchId: 1,
    },
    data() {
      return {
        showObj: mockGetList.data as Show,
      };
    },
  });
};
let wrapper: VueWrapper<any, ComponentPublicInstance<object, any>>;

describe("TvShowList.vue", () => {
  beforeEach(() => {
    wrapper = factory();
  });
  afterEach(() => jest.clearAllMocks());

  // it("calls api data", async () => {
  //   await wrapper.trigger("load");
  //   expect(axios.get).toHaveBeenCalledTimes(1);
  //   expect(axios.get).toHaveBeenCalledWith(showUrl + "/1");

  //   await flushPromises();

  //   const show = wrapper.find("h2");
  //   expect(show.text()).toContain("Under the Dome");
  // });

  it("get api data", async () => {
    const list = await wrapper.vm.$data;
    const show = wrapper.find("h2");

    expect(mockAxios).toHaveBeenCalledTimes(1);
    expect(show.text()).toContain("Under the Dome");
  });
});
