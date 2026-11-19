import { MemberCard } from "../member-card";

export function RerurateMemberCard() {
  return (
    <MemberCard class="member-rerurate">
      <span class="member-rerurate__rule" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="member-rerurate__top">
        <img
          class="member-rerurate__avatar"
          src="/members/icons/rerurate.jpg"
          alt=""
          width="64"
          height="64"
          loading="lazy"
        />
        <div class="member-rerurate__year">
          <span class="member-rerurate__year-number">4TH</span>
          <span class="member-rerurate__year-label">YEAR</span>
        </div>
      </div>
      <h3 class="member-rerurate__name">
        <a
          href="https://rerurate.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rerurate_<span class="member-rerurate__number">514</span>
        </a>
      </h3>
      <p class="member-rerurate__bio">
        Flutterエンジニアですよ～2027に東京に移住します
      </p>
      <div class="member-rerurate__footer">
        <a
          class="member-rerurate__site"
          href="https://rerurate.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="member-rerurate__site-label">WEBSITE</span>
          <span class="member-rerurate__site-value">
            rerurate.com
            <span class="member-rerurate__arrow" aria-hidden="true">
              ↗
            </span>
          </span>
        </a>
        <ul class="member-rerurate__links">
          <li>
            <a
              class="member-rerurate__link"
              href="https://x.com/rerurate"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </li>
          <li>
            <a
              class="member-rerurate__link"
              href="https://github.com/Rerurate514"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </MemberCard>
  );
}
