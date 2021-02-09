import React, { useEffect, useState } from 'react'

const Home = () => {
    const [textStyle, setTextStyle] = useState({})
    const [headerStyle, setHeaderStyle] = useState({})
    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        // console.log(window.scrollY)
        let y = window.scrollY

        if (y >= 20) {
            setTextStyle({ filter: 'opacity(1)', transition: 'filter 1s' })
            setHeaderStyle({ filter: 'opacity(0)', transition: 'filter 1s' })
        } else {
            setTextStyle({ filter: 'opacity(0)', transition: 'filter 1s' })
            setHeaderStyle({ filter: 'opacity(1)', transition: 'filter 1s' })
        }

    }
    return (
        <div >
            <div className='home-header' style={headerStyle} >
                <h2>React.jm</h2>
                <div>This is my portfolio site. It's mainly for testing different things, so it's getting updated somewhat regularly, but it's still a work in progress, </div>
            </div>

            <div className='home-div' style={textStyle} >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae impedit ipsum excepturi, reiciendis a sed provident iste facere inventore, fugit facilis voluptate quod laudantium placeat nisi fugiat porro iure quasi?
                Voluptatibus deserunt placeat a magnam blanditiis quidem odio? Eius sit cumque omnis nihil, earum ipsum sequi laboriosam quisquam accusantium dolore pariatur, optio mollitia facilis quae totam iure cupiditate quo voluptatum.
                Voluptatum, nostrum. Iusto laborum, cum nulla unde sint iure veritatis eum debitis. Natus facere deserunt aut obcaecati labore quasi temporibus recusandae voluptatibus, nobis, sequi architecto quo exercitationem deleniti numquam nam?
                Earum, recusandae. Assumenda quia ea nihil enim illo, excepturi doloremque nisi quod, possimus a voluptatum nesciunt sed iure nam tempore dolorem cum quaerat non adipisci molestias eveniet! Mollitia, dicta itaque.
                Molestias dolorum eius minima nostrum quis, aliquid maxime odit placeat minus libero totam veritatis atque, officiis id, doloremque delectus. Ipsa nihil eius voluptatem distinctio placeat cupiditate nisi aspernatur tempora atque.
                Culpa minus nesciunt velit perspiciatis vel, magni voluptatum accusamus architecto quia sed nemo impedit voluptatem incidunt cum laboriosam molestiae similique, sit magnam neque quidem. In autem facilis id architecto tempora.
                Omnis voluptates doloremque officiis assumenda repudiandae, autem natus vitae aut laboriosam fugiat eos quod nemo impedit iure quis eveniet, alias, rem modi culpa pariatur sit! Expedita quo facere dignissimos nobis?
                Unde facilis similique iste consequatur sit corporis rerum numquam soluta totam iure. Pariatur commodi eligendi officiis nobis? Repellendus, porro rem minus ducimus non minima magni earum distinctio? Quaerat, similique veritatis.
                Rem, aperiam adipisci? Sit iusto magnam placeat soluta error unde impedit eveniet mollitia excepturi eos reiciendis, molestias neque consectetur omnis possimus consequatur labore ducimus veniam dolorem pariatur sed! Exercitationem, dicta!
                Eaque aliquam quisquam tempore optio alias? Deserunt qui similique assumenda ea recusandae, provident illo eos tenetur molestiae omnis quasi illum laborum doloremque sed, odit nisi quos rerum animi nemo veritatis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam error dolores, iusto possimus in ab dignissimos corrupti omnis nemo dicta harum saepe, sed id iure, tenetur laudantium. Molestias, obcaecati!
                Blanditiis impedit dignissimos, sit cum, dolorem id quis, distinctio illo eaque assumenda nam voluptates? Voluptatum blanditiis quidem quos dolor totam voluptatibus accusamus, tempora, vitae ad corrupti aliquam delectus rerum ipsam.
                Perferendis, voluptate rem excepturi laudantium voluptatibus, nemo ullam ipsam itaque voluptatum blanditiis beatae dolorum pariatur ratione culpa doloribus deleniti sequi dolorem necessitatibus modi numquam delectus magni commodi ipsum quam. Tempora.
                Aspernatur ut inventore numquam at sed a molestias veniam dignissimos sapiente eveniet minima nobis eaque, impedit maiores, architecto omnis ducimus necessitatibus. Adipisci vitae ipsum, veniam nesciunt eligendi sapiente magni corporis!
                Rerum a hic magni, vero in, laudantium odit voluptas qui quae officiis ad aspernatur excepturi sed temporibus. Nostrum suscipit officiis voluptatum earum nobis animi vero, ut ipsum cum sapiente dolores!
                Earum odit quasi atque qui cupiditate? Esse doloremque, modi dolorem possimus assumenda nostrum. Quo harum, ut veniam fugit magnam rerum fugiat iure a laborum excepturi! Est suscipit aut quae reiciendis?
                Exercitationem officia blanditiis quidem dolore deleniti ipsum eligendi expedita aperiam quo excepturi unde, dolores aliquid laudantium, nihil distinctio laboriosam commodi id ut, vitae maiores? Repellat fuga ratione illo recusandae aliquam.
                Tenetur eius veritatis optio assumenda omnis non. Temporibus deleniti nostrum assumenda ea? Architecto cupiditate totam quasi numquam reprehenderit animi explicabo pariatur debitis distinctio, harum, quia quod ad, at vel? Assumenda!
                Dolorum dolorem id veniam rem quod eaque aliquam accusantium mollitia consequuntur nobis veritatis dolores expedita exercitationem at quos quasi vel saepe, suscipit quis labore molestiae facilis inventore modi similique. Delectus!
                Nobis maxime at est saepe! Rem officiis sunt magni molestias eligendi dolorum neque unde et aspernatur eum placeat vel non voluptas quasi ullam, pariatur in vero ipsam maiores? Placeat, voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi minima quasi laborum sequi velit voluptatem quibusdam, blanditiis, aliquid quas iure, vel incidunt minus cum nemo ad voluptatibus accusamus ullam placeat.
                Aspernatur accusantium modi porro quam quos repudiandae doloremque numquam omnis, harum facere? Adipisci nulla pariatur sequi aperiam nisi vel sit repellat dignissimos facilis saepe repellendus, quas neque animi autem est.
                Ea optio facilis, aut quis architecto aliquam nulla accusantium saepe et nam, iure, praesentium enim deleniti laboriosam ullam repudiandae voluptates quo debitis natus porro tempora. Alias porro exercitationem similique nulla!
                Enim unde assumenda provident aliquam eveniet, magni distinctio consequatur iusto quibusdam modi maiores. Et, animi nulla repellendus quasi sapiente sint unde, ducimus quae velit magnam cupiditate qui modi, similique fugit.
                Temporibus, alias sed voluptatem deleniti et ullam veniam. Et rem similique deleniti, necessitatibus excepturi itaque perspiciatis distinctio quam aliquid autem numquam, placeat nostrum voluptate qui dignissimos eaque veniam, quae consequatur.
                Incidunt earum unde delectus magnam et recusandae soluta quod ducimus, totam, error nobis labore dolorem reprehenderit asperiores nemo! Iusto hic saepe dolorum architecto totam praesentium quae quibusdam aliquam perspiciatis eligendi!
                Facere dolorum optio laboriosam quidem dolorem eaque quam corporis odit quod ut at mollitia aliquid repellendus eum distinctio sed consequuntur, iure ad et laudantium architecto sunt! Officia hic ullam quis?
                Distinctio dolores nihil architecto quasi vitae, quidem obcaecati repudiandae maiores, voluptas cupiditate necessitatibus voluptates corrupti molestias asperiores minus aperiam unde nesciunt recusandae quisquam officiis doloribus repellendus? Nulla aspernatur eveniet iusto.
                Exercitationem odio, incidunt aspernatur voluptas maxime repudiandae odit blanditiis, vitae saepe labore aliquam dolor inventore vel omnis corrupti optio assumenda architecto fuga culpa, totam ipsam ab sit? Odio, beatae accusantium.
                Ex suscipit placeat at qui, quisquam omnis officia sint adipisci similique harum vero necessitatibus libero deserunt, id voluptas magnam atque. Iusto odit quis nam, atque consequatur optio dignissimos delectus perferendis.
            </div>
        </div>
    )
}

export default Home
