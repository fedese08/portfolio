import React from 'react'
import './About.css'
import fotocv from '../images/fotocv.png'

export default function About() {
  return (
    <>
        <div id='about' >
            <div className='about-container-not-responsive' >
                <div className='about-info'>
                    <h1>Sobre mi</h1>
                    <p>
                        Me llamo Federico, soy un web developer viviendo en Buenos Aires, Argentina.
                        Actualmente soy estudiante de ingenieria en informatica. 
                        <br></br>
                        Estoy enfocado en el 
                        desarrollo front-end y frameworks como react js.
                    </p>
                </div>
                <div className='about-right-section'>
                    <div className='about-img-container'>
                        <div>
                            <img src={fotocv}/>
                        </div>
                    </div>
                    <button onClick={() => window.open("https://doc-0g-8k-docs.googleusercontent.com/docs/securesc/j1n4mmpjmovj4m2htjhe32rf1un3p5s1/n02m3plr5u9f2tbq0tohrrhv8naa3inv/1667105100000/00529716613502810761/00529716613502810761/1M8uQcjfrCnxF7yWnVSqU4MN8VpS_jjCD?e=download&ax=ALW9-sDdXPy_hKTGFPv30EV1TMTbjW1JIZXUjhdJ9NCmqrd1laiEjjAuDT53BeWJKvnWKAyf4Kej4OVELkCLQAyACxFZY3zS3eZEJrKJz-0KB3B27SDaCCwJz0hegKptEtlNVnP0AfTwzH-02y6Y94RBFMX6NK3BoUEpXDxJKPj6MvOUs19ZN9sOGQJycJwJRnTfedeqU_devFt3VKoKd763NV22DriDG7f9w24uVUFdGOB3QQHY_-asl5wZg1DA5V-luPmcHqRt--m9tKwbrhUIwtnvABWOJALL8YIU2qzKjtG4jiIXK1cK-zDGrWfLkblo3DoS-LURlX32Id1B9OAIhZpq8cZ6-7Ru7Ys8TEaqk218bz4QhybVG31Dl6RvxqiYzJUdeX6spIa4YDktpTbILhZ4KUnP4Bq9hZap2f3ZdcDpndkndn25IqmwvPE5l_icXXgSq92wnGBk7mpw_Q9kA6nz5oi9JYqHA7T01uOYv6RF3ls-hMChKiTPtjAXxZb_2nNFpgNDOADRYlvS89VgeQ35kwB7s1RgEv7kIIU7oALxtuzkgviEKiEd15wg1BtseAARAFq8LnfGS7G2WCwhSGMqe1PqLY_nV-vOJTUNvo7BB3lgUtV5c-R6Oispzk5jKlIYmX12g_irFFHM9cfu_AlSsKY27cITtQq-1rZ7euWcrMCT2k20PJp53NsmVzNdF7qiOrzSI7N7cB31GwlEmdsbKJ4jlrzztKVP0p6EHZUYWs8fahMSRNMFV5Sqraq-1KJeIzwxpIUmCGuUKzsEN2OpzC1Tm7wzqGdTM0WZUSGw4aLC13_xJsMWwIa8GcrOCThhSb8H0hdLxrHajqnbZmIOSZ8EeRsNQizGITgmDJkj8WzGY7Q4AeQwxdtwYauECQ&uuid=e812efce-24a3-4743-b88f-bb1beab318b9&authuser=0&nonce=k35k1o2beksca&user=00529716613502810761&hash=2uvrdfsbsm5jta9fnmaqj50q8o07etfk")}>Descargar CV</button>
                </div>
            </div>
            <div className='about-container-responsive' >
                <div className='about-info'>
                    <h1>Sobre mi</h1>
                    <p>
                        Me llamo Federico, soy un web developer viviendo en Buenos Aires, Argentina.
                        Actualmente soy estudiante de ingenieria en informatica. 
                        <br></br>
                        Estoy enfocado en el 
                        desarrollo front-end y frameworks como react js.
                    </p>
                </div>
                <div className='about-right-section'>
                    <div className='about-img-container'>
                        <div>
                            <img src={fotocv}/>
                        </div>
                    </div>
                    <button onClick={() => window.open("https://doc-0g-8k-docs.googleusercontent.com/docs/securesc/j1n4mmpjmovj4m2htjhe32rf1un3p5s1/n02m3plr5u9f2tbq0tohrrhv8naa3inv/1667105100000/00529716613502810761/00529716613502810761/1M8uQcjfrCnxF7yWnVSqU4MN8VpS_jjCD?e=download&ax=ALW9-sDdXPy_hKTGFPv30EV1TMTbjW1JIZXUjhdJ9NCmqrd1laiEjjAuDT53BeWJKvnWKAyf4Kej4OVELkCLQAyACxFZY3zS3eZEJrKJz-0KB3B27SDaCCwJz0hegKptEtlNVnP0AfTwzH-02y6Y94RBFMX6NK3BoUEpXDxJKPj6MvOUs19ZN9sOGQJycJwJRnTfedeqU_devFt3VKoKd763NV22DriDG7f9w24uVUFdGOB3QQHY_-asl5wZg1DA5V-luPmcHqRt--m9tKwbrhUIwtnvABWOJALL8YIU2qzKjtG4jiIXK1cK-zDGrWfLkblo3DoS-LURlX32Id1B9OAIhZpq8cZ6-7Ru7Ys8TEaqk218bz4QhybVG31Dl6RvxqiYzJUdeX6spIa4YDktpTbILhZ4KUnP4Bq9hZap2f3ZdcDpndkndn25IqmwvPE5l_icXXgSq92wnGBk7mpw_Q9kA6nz5oi9JYqHA7T01uOYv6RF3ls-hMChKiTPtjAXxZb_2nNFpgNDOADRYlvS89VgeQ35kwB7s1RgEv7kIIU7oALxtuzkgviEKiEd15wg1BtseAARAFq8LnfGS7G2WCwhSGMqe1PqLY_nV-vOJTUNvo7BB3lgUtV5c-R6Oispzk5jKlIYmX12g_irFFHM9cfu_AlSsKY27cITtQq-1rZ7euWcrMCT2k20PJp53NsmVzNdF7qiOrzSI7N7cB31GwlEmdsbKJ4jlrzztKVP0p6EHZUYWs8fahMSRNMFV5Sqraq-1KJeIzwxpIUmCGuUKzsEN2OpzC1Tm7wzqGdTM0WZUSGw4aLC13_xJsMWwIa8GcrOCThhSb8H0hdLxrHajqnbZmIOSZ8EeRsNQizGITgmDJkj8WzGY7Q4AeQwxdtwYauECQ&uuid=e812efce-24a3-4743-b88f-bb1beab318b9&authuser=0&nonce=k35k1o2beksca&user=00529716613502810761&hash=2uvrdfsbsm5jta9fnmaqj50q8o07etfk")}>Descargar CV</button>
                </div>
            </div>
        </div>
    </>
  )
}
