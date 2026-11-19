import { MemberCard } from "../member-card";

const links = [
  { label: "GitHub", href: "https://github.com/saitojo1106" },
  { label: "X", href: "https://x.com/mukimuki_js" },
  { label: "Qiita", href: "https://qiita.com/saitojo1106" },
];

const facts = [
  { label: "得意分野", value: "meat proxy" },
  { label: "技術", value: "TS / Go / Terraform / GCP / Cloudflare" },
];

export function SaitojoMemberCard() {
  return (
    <MemberCard class="member-saitojo">
      <div class="member-saitojo__top">
        <div class="member-saitojo__frame">
          <img
            class="member-saitojo__avatar"
            src="/members/icons/saitojo.jpg"
            alt=""
            width="52"
            height="52"
            loading="lazy"
          />
        </div>
        <div class="member-saitojo__id">
          <h3 class="member-saitojo__name">saitoudayooooon_jo</h3>
          <p class="member-saitojo__grade">4年生・来年OB・幹事</p>
        </div>
      </div>
      <p class="member-saitojo__quote">
        スマートグラスとリング買ったので金欠で、来年から東京です~
      </p>
      <dl class="member-saitojo__facts">
        {facts.map((fact) => (
          <div>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
      <div class="member-saitojo__seg">
        <ul class="member-saitojo__list">
          {links.map((link) => (
            <li>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul
          class="member-saitojo__list member-saitojo__list--active"
          aria-hidden="true"
        >
          {links.map((link) => (
            <li>{link.label}</li>
          ))}
        </ul>
      </div>
    </MemberCard>
  );
}
