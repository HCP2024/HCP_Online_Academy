window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const footerYear = document.querySelector('footer #year');
    const testimonialParent = document.querySelector('.section .testimonials');

    if(overlay) {
        !overlay.classList.contains('view') ? overlay.classList.add('view') : null;

        overlay.querySelector('.top span').addEventListener('click', (e) => {
            e.preventDefault();
            overlay.classList.add('fadeOut');
            overlay.classList.toggle('view');
        });
    }

    if(footerYear) {
        const year = new Date().getFullYear();

        footerYear.textContent = year;
    }

    if(testimonialParent) {
        const arr = [ {
            name: 'Afam ',
            who: 'Mentee 2024',
            image: '/afam-pics.jpeg',
            review: `I recently completed the Higher Circuit Professional (HCP) training program, and I must say it has been a game-changer for my career in the electrical field. The comprehensive training provided by HCP has not only enhanced my technical skills but also opened up new opportunities for career advancement.  The HCP training program covers a wide range of topics, including electrical circuit analysis, power systems, control systems, and safety protocols. The training is highly interactive, with hands-on exercises and real-world examples that help reinforce theoretical concepts.                       
            
            The instructors at HCP are experienced professionals with extensive knowledge in the electrical field.`
        }, {
            name: 'Monjock Samuel',
            who: 'Mentee 2024',
            image: '/mojok-pics.jpeg',
            review: `My name is monjock Samuel a just graduated student of higher circuit professionals (HCP) the best and most recommended place to learn the basics of electrical and electronics as an intending engineer. 
 With the help of HCP I have been able to at least explore the world of electrical/ electronics as they have qualified teachers/lectures who will take you mostly on practicals as it is the most vital of engineering.`
        },
        ];

        testimonialParent.innerHTML = arr.map((tes) => {
            return ` <div class="testimonial">
                        <div class="upper">
                            <div class="image">
                                <img src="${tes.image}" alt="Testimonial Image of ${tes.name}" />
                                <p class="name">${tes.name} | ${tes.who}</p>
                            </div>
                        </div>
                        <div class="review">
                           ${tes.review}</div>
                    </div>`;
        });
    }
});