import GitHubCalendar from 'react-github-calendar';
import { reference } from '../config/menu';
import { Quote } from '../Component/Quote';

export const About = () => {
    return <div className='py-8'>
        <div className="text-zinc-400 text-md leading-6">A passionate Blockchain Full-stack with expertise in Web3 and responsive web applications. Focusing on <span className='text-white'> Smart contracts, trading dApps and Blockchain AI Agent</span> on<span className='text-white'> Solana, EVM </span>compatible blockchain. Experience spans NFTs, crypto games, DeFi, DEXs and crypto trading bots. As a Full-Stack Engineer, I builds scalable applications using <span className='text-white'> React, Next.js, TypeScript, Node.js, Rust, Golang, and Solidity</span>. Passionate about blockchain innovation, he is always exploring new opportunities for growth.
            {/* Visit for more detail <a href='https://drive.google.com/file/d/1dPYF77CKMM1y-00nzpBjBdN8MfWcJMdg/view?usp=drive_link' target='block' className='underline hover:text-white transition text-white'>here</a> */}
        </div>
        {/* Reference */}
        <div className='py-10'>
            {
                reference.map((v, i) =>
                    <Quote clinet={v.name} url={v.url} key={"quote" + i} tweet={v.tweetUrl}>{v.content}</Quote>
                )
            }
        </div>
        <div className='w-full overflow-auto'>

            <GitHubCalendar
                username="m4rcu5o"
                year={'last'}
                transformTotalCount={true}
                style={{ color: "#fff", minWidth: '800px' }}
            />
        </div>
    </div>

}