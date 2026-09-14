import React from 'react';

function Practice() {
    return (
        <div className='px-5'>
            <h1 className="font-mono text-4xl">E-Commerce Store</h1>
            <h1 className="font-mono text-xs">E-Commerce Store</h1>
            <h1 className="font-mono text-sm">E-Commerce Store</h1>
            <h1 className="font-mono text-base">E-Commerce Store</h1>
            <h1 className="font-mono text-lg">E-Commerce Store</h1>
            <h1 className="font-mono text-6xl">E-Commerce Store</h1>

            <br /><br />
            {/* // font weight  */}
            <p className='font-thin'>Thin</p>
            <p className='font-light'>Light</p>
            <p className='font-normal'>Normal</p>
            <p className='font-medium'>Medium</p>
            <p className='font-semibold'>Semi Bold</p>
            <p className='font-extrabold'>Extrabold</p>

            {/* line Height  */}
            <p className='leading-8 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit nihil consequuntur, odio numquam earum nulla nisi ratione blanditiis architecto dolor!</p>

            <br /><br />
            {/* Letter Spacing */}
            <h2 className='tracking-tight'>Welcome</h2>
            <h2 className='tracking-tighter'>Welcome2</h2>
            <h2 className='tracking-wide'>Welcome3</h2>
            <h2 className='tracking-wider'>Welcome3</h2>
            <h2 className='tracking-widest text-4xl uppercase'>Welcome 6</h2>

            <br /><br />
            {/* text Alignment  */}

            <div className="text-center">Center</div>

            <p className='capitalize underline decoration-2'>lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, perspiciatis illo! Ducimus, ea illum quaerat perferendis perspiciatis vitae possimus officiis?</p>

            <p className='underline underline-offset-6 decoration-blue-500'>Lorem ipsum dolor sit amet.</p>

            <br /><br />
            <p className='truncate text-lg font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, natus aliquam! Incidunt excepturi sed at. Repudiandae sequi commodi error esse!</p>
            <br /><br />
            <p className='line-clamp-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, maiores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, maiores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, maiores!</p>
            <br /><br />
            <div className="p-5">
                <h3 className="truncate text-xl font-bold">Wireless Noise Cancelling Headphone</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit maiores sint aspernatur corrupti magni natus debitis, qui, harum, atque in sapiente! Velit tempora atque unde doloribus ipsa cupiditate eaque omnis possimus aut voluptatem nobis maiores, itaque ad ullam saepe voluptate cumque nihil culpa corporis. Aspernatur dolor consequatur libero corrupti.
                </p>
            </div>

            <br /><br />
            <p className='whitespace-normal'>Normal text wrapping</p>
            <p className='whitespace-nowrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, vitae sed labore in debitis delectus sunt eum ex eveniet nulla?</p>
            <br /><br />
            <p className='break-words'>
                https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D
            </p>
            <br /><br />
            <ul className='list-disc'>
                <li>React.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
            </ul>
            <br /><br />
            <ul className="list-disc list-inside">
                <li>React.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
            </ul>
            <br /><br />
            <ul className='mt-4 list-disc space-y-2 pl-5 text-gray-600'>
                <li>List link number-1</li>
                <li>List link number-2</li>
                <li>List link number-3</li>
                <li>List link number-4</li>
            </ul>
            <br /><br />
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='px-4 py-3 text-left'>Product</th>
                        <th className='px-4 py-3 text-left'>Price</th>
                        <th className='px-4 py-3 text-left'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-4 py-3'>Laptop</td>
                        <td className='px-4 py-3 text-left'>$999</td>
                        <td className='px-4 py-3 text-left'>In Stock</td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
        </div>
    );
}

export default Practice;