import { mount, VueWrapper } from "@vue/test-utils";
import TvShowsList from "@/components/tv-show/TvShowsList.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router";
import { ComponentPublicInstance } from "vue";
import "core-js/stable";

const mockAxios = jest.fn(() => Promise.resolve(mockGetList));
jest.mock("axios", () => ({
  get: () => mockAxios(),
}));

const mockGetList = {
  data: {
    genre: "Espionage",
    shows: [
      {
        id: 7,
        url: "https://www.tvmaze.com/shows/7/homeland",
        name: "Homeland",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Thriller", "Espionage"],
        status: "Ended",
        runtime: 60,
        averageRuntime: 60,
        premiered: "2011-10-02",
        ended: "2020-04-26",
        officialSite: "http://www.sho.com/sho/homeland/home",
        schedule: {
          time: "21:00",
          days: ["Sunday"],
        },
        rating: {
          average: 8.2,
        },
        weight: 96,
        network: {
          id: 9,
          name: "Showtime",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: "https://www.sho.com/",
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 27811,
          thetvdb: 247897,
          imdb: "tt1796960",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/498/1245275.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/498/1245275.jpg",
        },
        summary:
          "<p>The winner of 6 Emmy Awards including Outstanding Drama Series, <b>Homeland</b> is an edge-of-your-seat sensation. Marine Sergeant Nicholas Brody is both a decorated hero and a serious threat. CIA officer Carrie Mathison is tops in her field despite being bipolar. The delicate dance these two complex characters perform, built on lies, suspicion, and desire, is at the heart of this gripping, emotional thriller in which nothing short of the fate of our nation is at stake.</p>",
        updated: 1704792951,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/7",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/1801029",
          },
        },
      },
      {
        id: 157,
        url: "https://www.tvmaze.com/shows/157/the-americans",
        name: "The Americans",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Espionage"],
        status: "Ended",
        runtime: 60,
        averageRuntime: 62,
        premiered: "2013-01-30",
        ended: "2018-05-30",
        officialSite: "http://www.fxnetworks.com/theamericans",
        schedule: {
          time: "22:00",
          days: ["Wednesday"],
        },
        rating: {
          average: 8.6,
        },
        weight: 94,
        network: {
          id: 13,
          name: "FX",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 30449,
          thetvdb: 261690,
          imdb: "tt2149175",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/146/366911.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/146/366911.jpg",
        },
        summary:
          "<p><b>The Americans</b> is a period drama about the complex marriage of two KGB spies posing as Americans in suburban Washington D.C. shortly after Ronald Reagan is elected President.</p>",
        updated: 1704793603,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/157",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/1384837",
          },
        },
      },
    ],
  },
};

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const factory = () => {
  return mount(TvShowsList, {
    global: {
      plugins: [router],
    },
  });
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

    const list = await wrapper.vm.$data;
    const showGenre = wrapper.find("h3");

    expect(mockAxios).toHaveBeenCalledTimes(1);
    expect(showGenre.text()).toContain("Espionage");
  });
});
