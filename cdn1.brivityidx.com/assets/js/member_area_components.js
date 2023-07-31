document.addEventListener("DOMContentLoaded", () => {
  const key = localStorage.getItem("authorization");
  if (key) {
    const jwtPayload = JSON.parse(window.atob(key.split(".")[1]));
    if (Date.now() >= jwtPayload.exp * 1000) {
      $("#sign-up-modal").modal("show");

      $("#sign-up-modal").on("hidden.bs.modal", function () {
        location.reload();
      });
    }
  }
});

class Menu {
  constructor(is_blueroof_person, agent, baseURL, apiKey) {
    this.baseUrl = baseURL;
    this.apiKey = apiKey;
    this.marketReportEnabled = false;
    this.element = document.querySelector("place-menu");

    (async () => {
      this.marketReportEnabled = is_blueroof_person ? false : await this.isMarketReportEnabledForLead();

      if (is_blueroof_person || !this.marketReportEnabled) {
        this.element.setAttribute(
          "items",
          '[{"icon":"search","text":"Search"},{"icon":"heart","text":"Collections"},{"icon":"bookmark","text":"Saved Searches"},{"icon":"user","text":"Profile"},{"icon":"agent-icon","text":"My Agent"}]'
        );
      } else {
        this.element.setAttribute(
          "items",
          '[{"icon":"search","text":"Search"},{"icon":"heart","text":"Collections"},{"icon":"bookmark","text":"Saved Searches"},{"icon":"activity","text":"Market Report"},{"icon":"user","text":"Profile"},{"icon":"agent-icon","text":"My Agent"}]'
        );
      }
    })();

    this.element.setAttribute("name", agent?.first_name + " " + agent?.last_name);
    this.element.setAttribute("photo", agent?.agent_photo);
    this.element.setAttribute("company", agent?.company_name || "");
    this.element.setAttribute("phone_number", agent?.phone_number || "");

    this.element.addEventListener("on_email_pressed", (e) => {
      window.open("mailto:+" + (agent?.email_address || ""));
    });

    this.element.addEventListener("on_phone_pressed", (e) => {
      window.open("tel:" + (agent?.phone_number || "").replace(/[^0-9.]/g, ""));
    });

    this.element.addEventListener("on_menu_item_pressed", (e) => {
      if (e.detail == "Search") {
        window.location.href = "../search";
      }

      if (e.detail == "My Agent") {
        window.location.href = "../myportal/agent";
      }

      if (e.detail == "Collections") {
        window.location.href = "../myportal/collections";
      }

      if (e.detail == "Saved Searches") {
        window.location.href = "../myportal/searches";
      }

      if (e.detail == "Market Report") {
        window.location.href = "../myportal/reports";
      }

      if (e.detail == "Profile") {
        window.location.href = "../myportal/profile";
      }
    });

    let page = window.location.pathname.split("/").pop();
    let index = 0;
    let hiddenLink = is_blueroof_person ? 1 : 0;
    if (page == "search") {
      index = 0;
    } else if (page == "collections") {
      index = 1;
    } else if (page == "searches") {
      index = 2;
    } else if (page == "reports") {
      index = 3;
    } else if (page == "profile") {
      index = 4 - hiddenLink;
    } else if (page == "agent") {
      index = 5 - hiddenLink;
    }

    this.element.setAttribute("selected_index", index);
  }

  isMarketReportEnabledForLead = async () => {
    const response = await fetch(`${this.baseUrl}/cma/enableMarketReportsForLead`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    return data;
  };
}

class Toast {
  constructor() {
    this.element = document.querySelector("place-generictoast");
  }

  show(message, error = false) {
    window.dispatchEvent(
      new CustomEvent("ShowToast", {
        detail: {
          text: message,
          error: error,
        },
      })
    );
  }
}
