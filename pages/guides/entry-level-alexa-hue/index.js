import Head from "next/head";
import Layout from "../../../components/layout";
import GuideList from "../../../components/GuideList";
import useSWR from "swr";
import fetcher from "../../../libs/fetcher";
import { useEffect, useState } from "react";

export default function (props) {
  const meta = {
    title: "Entry Level Build with Alexa and Philips Hue",
    author: "Drew B.",
    twitter: "@boxcardrew",
    description: "Entry Level with Alexa and Philips Hue",
    date: "August 10, 2020",
    stars: 2,
    tags: ["Alexa", "Featured", "Hue"],
    items: [2406, 2425, 2434, 2435, 2439],
    total: 445,
    slug: 'entry-level-alexa-hue',
  };

  const URL = `/api/list?productId=${meta.items}`;
  const [list, setList] = useState([]);
  const { data } = useSWR(`/api/list?productId=${meta.items}`, fetcher);

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  const getInitials = (author) => {
    const names = author.split(" ");
    const firstInitial = names[0].slice(0, 1);
    const lastInitial = names[1].slice(0, 1);
    return firstInitial + lastInitial;
  };
  const socialLinks = [
    {
      img: "/social/color/star.svg",
      alt: "star",
      href: "https://caniautomate.com",
    },
    {
      img: "/social/color/facebook.svg",
      alt: "facebook",
      href: "https://facbook.com/caniautomate",
    },
    {
      img: "/social/color/twitter.svg",
      alt: "twitter",
      href: "https://twitter.com/caniautomate",
    },
    {
      img: "/social/color/reddit.svg",
      alt: "reddit",
      href: "https://reddit.com/caniautomate",
    },
    {
      img: "/social/color/share-24px.svg",
      alt: "share",
      href: "https://share.com/caniautomate",
    },
  ];

  return (
    <>
      <Head>
        <title>Can I Automate: {meta.title}</title>
      </Head>
      <Layout>
        <div className="main">
          <div className="guide-info">
            <div>
              <span className="initials">{getInitials(meta.author)}</span>
            </div>
            <div>
              <span className="sr-only">Author </span>
              <span className="author">{meta.author}</span>
              <span className="date">{meta.date}</span>
              <span className="handle">
                <a href={`https://twitter.com/${meta.twitter}`}>
                  {meta.twitter}
                </a>
              </span>
            </div>
          </div>
          <article className="article">
            <div>
              <h1>{meta.title}</h1>
              {meta.tags.map((element) => (
                <span key={element} className="tags">
                  {element}
                </span>
              ))}

              <ul className="social">
                {socialLinks.map(({ img, alt, href }) => (
                  <li className="social-item" key={"social_" + alt}>
                    <a href={href}>
                      <img src={img} alt={alt} loading="lazy" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <section>
              <h2>Introduction</h2>
              <p>
                Our latest project was getting our home theater room set up for
                voice control. We had a few requirements and some ‘nice to
                haves’. The requirements were pretty simple. We needed to be
                able to tell Alexa to dim the lights, lower the screen, and turn
                on the home theater equipment. This all seemed pretty simple
                except for the projector screen.
              </p>
              <p>
                Some other nice to haves would be different scenes for watching
                sports, movies and playing games. And, perhaps, a pre-movie
                setting, like when you go to theaters and they’re showing the
                previews before the feature.
              </p>
            </section>
            <section>
              <h2>Voice</h2>
              <p>
                We chose to go with an Amazon Echo, we are pretty much locked
                into the Alexa Ecosystem. Plus, the added benefit of using a
                Fire TV for streaming seemed to make sense here. We have an echo
                dot mounted next to the projector.
              </p>
            </section>
            <section>
              <h2>Lighting</h2>
              <p>
                We chose to go with Sengled bulbs all around for this one. They
                offer a nice variety for a decent price. We have 6 of the BR30
                bulbs in the ceiling plus some ambient strips around the room.
                They are all connected to the Sengled Hub for Voice control.
              </p>
            </section>
            <section>
              <h2>Audio/Video</h2>
              <p>
                This is where things got a little tricky. Amazon does make an IR
                blaster for Alexa but it didn’t make sense in this room because
                the equipment is not within line of sight. We need to find
                something that could control via bluetooth, wifi or other means.
                We chose to go with the Logitech Harmony Hub. I’m familiar with
                Logitech’s universal remotes and this seemed like a perfect
                solution.
              </p>
            </section>
            <section>
              <h2>Other</h2>
              <p>
                We decided to add an Amazon Smart Plug for our popcorn maker but
                we’re still looking for a solution for the projector screen, it
                currently stays down all the time.
              </p>
            </section>
            <section>
              <h2>Integrations</h2>
              <p>
                So to tie everything together we used the ‘Scene’ feature with
                our Amazon Echo. This allowed us to set up multiple actions for
                one command. What we have so far:
              </p>
              <ul className="list">
                <li>
                  “Movie Night” - This dims the lights to 15%, turns on the
                  popcorn maker using the Amazon Smart Plug, and makes sure the
                  projector and A/V Receiver are turned on via the Logitech
                  Harmony.
                </li>
                <li>
                  “Start the movie” - This will dim all the overhead lights to
                  0% and set the ambient lighting to 5%. This really gives it a
                  movie theater feel.
                </li>
              </ul>
              <p>
                We have a couple of other scenes for “game night” and “watch
                sports”, which just turn the receiver to the correct input using
                the Harmony Hub and change the lighting. This was a pretty
                simple build overall but it was very pleasing.
              </p>
            </section>
          </article>
          <section className="parts-list">
            <GuideList title="Parts List" data={list} />
          </section>
        </div>
      </Layout>
      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        .main {
            margin: 3rem auto;
            padding: 0 1rem;
            display: block;
            max-width: 800px;
          }
        .guide-info {
          display: none;
        }
        .article h1 {
          font-size: 40px;
          margin-bottom: 8px;
        }
        .article h2 {
          font-size: 24px;
          margin-bottom: .75rem;
        }
        .article p {
            font-size: 16px;
            line-height: 1.25;
            font-weight: 400;
            margin-bottom: 1.5rem;
          }
        .list li {
          font-size: 16px;
          line-height: 1.25;
          font-weight: 400;
        }
        .list {
          padding-left: 2rem;
          margin-bottom: 1.5rem;
        }
        
        @media only screen and (min-width: 1150px) {
          .main {
            width: 100%;
            max-width: 1500px;
            margin: 8rem auto 5rem;
            padding: 0 5em;
            display: grid;
            grid-column-gap: 10%;
            grid-template-columns: 55% 20%;
            grid-template-areas: "article info" "parts parts";
            justify-content: center;
          }
          .guide-info {
            grid-area: info;
            display: flex;
          }
          .article h1 {
            font-size: 60px;
          }
          .article h2 {
            font-size: 32px;
          }
          .article p {
            font-size: 20px;
            line-height: 1.5;
            font-weight: 400;
            margin-bottom: 1.5rem;
          }
          .list li{
          font-size: 20px;
          line-height: 1.5;
          font-weight: 400;
        }
        }
        @media only screen and (min-width: 769px) {
          .article h1 {
            font-size: 50px;
          }
          .article h2 {
            font-size: 36px;
          }
          .article p {
            font-size: 20px;
            line-height: 1.5;
            font-weight: 400;
            margin-bottom: 1.5rem;
          }
        }
        
        .article {
          grid-area: article;
        }
        .social {
          margin-bottom: 1.5rem;
        }
        .social ul {
          list-style: none;
        }
        .social-item {
        display: inline-block;
        margin: .25em 1em 1em 0;
      }
      .social-item img {
        width: 24px;
        height: auto;
      }

        .article p:last-of-type {
          margin-bottom: 3rem;
        }
        
        
        .parts-list {
          grid-area: parts;
          margin-bottom: 6rem;
        }
        .tags {
          background: #F6BBBB;
          margin: 0 8px 16px 0;
          display: inline-block;
          width: 70px;
          padding: 6px 0;
          font-size: 12px;
          font-weight: 600;
          color: #A23030;
          border-radius: 4px;
          text-align: center;
        }
        .tags:nth-child(3) {
          background: #C9BBF6;
          color: #4D359D;
        }
        .tags:nth-child(4) {
          background: #C5D5EC;
          color: #032961;
        }
        .initials {
          font-size: 32px;
          font-weight: 600;
          padding: 16px;
          border-radius: 50%;
          color: #4D359D;
          background: #C9BBF6;
          display: inline-block;
          margin-right: 16px;
        }
        .author {
          display: block;
          font-weight: 600;
          margin-bottom: 0px;
          font-size: 20px;
        }
        .date {
          display: block;
          font-weight: 300;
          margin-bottom: 0px;
        }
        }
        .handle {
          display: block;
          font-weight: 300;
        }
        .handle a {
          text-decoration:  none;
          color: inherit;
        }
         
       
      `}</style>
    </>
  );
}
