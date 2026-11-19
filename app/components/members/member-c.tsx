import { MemberCard } from "../member-card";

export function MemberCCard() {
  return (
    <MemberCard>
      <div class="site-member-card__header">
        <span
          class="site-member-card__avatar site-member-card__avatar--initial"
          aria-hidden="true"
        >
          部
        </span>
        <div class="site-member-card__identity">
          <h3 class="site-member-card__name">部員 C</h3>
          <span class="site-member-card__badge">OB</span>
        </div>
      </div>
      <p class="site-member-card__bio">
        OBとして後輩の活動を見守っています。
      </p>
      <a
        class="site-member-card__site"
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://example.com
      </a>
      <ul class="site-member-card__links">
        <li>
          <a
            class="site-member-card__link"
            href="https://github.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            class="site-member-card__link"
            href="https://www.youtube.com/@example"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </li>
      </ul>
    </MemberCard>
  );
}
