import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RulesPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Official Pool Rules</h1>
    <p>
      Pool form will be made available Wednesdays <br />
      <Link to="paid-version-form">Paid Version</Link>
      <br />
      <Link to="/free-version-form">Free Version</Link>
    </p>
    <p>
      The pool sheet for the week will be made available 30 minutes before TNF
      kickoff
      <br />
      <Link to="/sheet">Sheet</Link>
    </p>
    <ul>
      <li>
        Players must submit money entry in the amount agreed upon to designated
        pot holder no later than TNF kick off.
        <ul>
          <li>
            If contestant does not pay the entry fee by TNF, a $5.00 tax will
            apply on top of the original entry fee.
          </li>
          <li>
            If contestant does not pay entry fee for that week, he is not
            disqualified. Instead he will continue to owe the entry fee plus the
            tax applied to the winner of that week. In addition, he will not be
            able to participate in any future pools until his debt is paid in
            full.
          </li>
          <li>
            if submission is not paid and contestant happens to win, the
            contestant in second place will be awarded as the winner of the pool
            for that week.
          </li>
        </ul>
      </li>
      <li>
        Contestants must have all their picks submitted to designated sheet
        holder by TNF kick off.
        <ul>
          <li>
            If you submitted a sheet –you are officially playing in the pool for
            that week and will need to pay the entry fee by the deadline. You
            will not be able to opt out if your TNF pick loses.
          </li>
          <li>
            ***Once picks are submitted, there will be no changes allowed. Be
            100% sure on your picks before submission to sheet holder.
          </li>
        </ul>
      </li>
      <li>
        If there is a tie between contestants, the sum amount of each teams
        score for the Monday night game will be calculated and the contestant
        closest to the score is announced the winner
        <ul>
          <li>
            If even then there is a tie, the pot will be divided equally amongst
            those players.
          </li>
          <li>
            For the tiebreaker, it does not matter if your point total is over
            or under the actual score total. It is only the difference that
            counts.
          </li>
        </ul>
      </li>
      <li>
        Incentives: If a player so happens to pick *ALL games correctly (points
        aside at this point), the following week he or she will not need to pay
        for entry. In other words, they are playing for free.
        <ul>
          <li>
            E.g.: 5 players are playing but only 4 of those players are paying
            at 25$ each. Total is 100$. The 5th. Is playing for free and has a
            chance to win the 100$ POT.
          </li>
        </ul>
      </li>
      <li>
        Not applied yet. A commission fee will be applied to the winner of the
        pot for that week. He or she will pay a certain percentage of the POT to
        the bookie/sheet holder.
      </li>
    </ul>
    <p>
      NOTE: If no TNF game is scheduled for the week, then apply to the first
      game of the week.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default RulesPage
