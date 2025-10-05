// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Bạn có phải là Việt Hồng không?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đúng rồi',
        cancelButtonText: 'Không phải',
    }).then((result) => {
        if (result.isConfirmed) {
  document.querySelector('.song').play();

  // 👇 THÊM: prime video trong ngữ cảnh user gesture
  const v = document.getElementById('introVideo');
  if (v) {
    v.muted = true;                 // giữ muted để an toàn
    v.playsInline = true;           // iOS property song song với playsinline attr
    try {
       v.play();               // play trong gesture
      v.pause();                    // pause ngay để “mở khoá”
      v.currentTime = 0;            // tua về đầu, sẵn sàng phát sau
    } catch (e) {
      // Nếu vẫn bị chặn, không sao: GSAP sẽ thử lại sau.
    }
  }

  animationTimeline();
}else {
            // hiển thị thông báo khi chọn "Không phải"
            Swal.fire({
                title: '🚫 Đi chỗ khác chơi!',
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }
    });
});


// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".one", 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".two", 0.4, {
        opacity: 0,
        y: 10
    })
    .to(".one",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3.5")
    .to(".two",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "-=1")
    .from(".three", 0.7, {
        opacity: 0,
        y: 10
    })
    .to(".three",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3")
    .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
    })
    .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
    })
    .staggerTo(
        ".hbd-chatbox span",
        1.5, {
            visibility: "visible",
        },
        0.05
    )
    .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
    },
    "+=4")
    .to(
        ".four",
        0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
    "+=1")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
        ".idea-5",
        0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
        "+=1.5"
    )
    .to(
        ".idea-5 span",
        0.7, {
            rotation: 90,
            x: 8,
        },
        "+=1.4"
    )
    .to(
        ".idea-5",
        0.7, {
            scale: 0.2,
            opacity: 0,
        },
        "+=2"
    )
    .staggerFrom(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
        0.2
    )
    .staggerTo(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
    )
    .staggerFromTo(
        ".baloons img",
        2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
        0.2
    )
    .from(
        ".profile-picture",
        0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
        "-=2"
    )
    .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
    })
    .staggerFrom(
        ".wish-hbd span",
        0.7, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
    )
    .staggerFromTo(
        ".wish-hbd span",
        0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
        0.1,
        "party"
    )
    .from(
        ".wish h5",
        0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
        "party"
    )
    .staggerTo(
        ".eight svg",
        1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        },
        0.3
    )
.add(() => {
  const v = document.getElementById('introVideo');
  const img = document.getElementById('imagePath');
    const bgm = document.getElementById('bgm'); // 🎵 nhạc nền

   if (!v) return;
     gsap.to(bgm, { volume: 0, duration: 1 });

  v.classList.remove('hidden');     // đảm bảo CSS không còn opacity:0 / display:none
  // Nếu đã “prime” ở trên, lệnh này trên mobile sẽ chạy trơn tru
  v.play().catch(() => {
    // Nếu có lỗi, có thể yêu cầu user chạm màn hình (ít gặp nếu đã prime)
  });

  // Ẩn ảnh nếu muốn video "thế chỗ" ảnh
  // TweenMax.set(img, { autoAlpha: 0 });

  // Hiện video + fade-in
  TweenMax.set(v, { display: 'block', opacity: 0 });
  TweenMax.to(v, 0.6, { opacity: 1 });

  // Phát video (muted nên không bị chặn)
  try { v.currentTime = 0; v.play(); } catch (e) {}
})

// 2) TẠM DỪNG timeline cho tới khi video kết thúc
.addPause('+=0', () => {
  const v = document.getElementById('introVideo');
    const bgm = document.getElementById('bgm');

  const onEnded = () => {
    v.removeEventListener('ended', onEnded);
    gsap.to(bgm, { volume: 1, duration: 1 });

    // Fade-out video rồi ẩn đi
    TweenMax.to(v, 0.4, {
      opacity: 0,
      onComplete: () => {
        v.pause();
        v.currentTime = 0;
        TweenMax.set(v, { display: 'none' });

        // Nếu trước đó bạn ẩn ảnh, có thể hiện lại:
        // TweenMax.set('#imagePath', { autoAlpha: 1 });

        // Tiếp tục timeline
        tl.play();
      }
    });
  };
  v.addEventListener('ended', onEnded);
})

     .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
        ".last-smile",
        0.5, {
            rotation: 90,
        },
        "+=1"
    );

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
}

(function () {
  const audio = document.getElementById('bgm');
  const gate  = document.getElementById('audioGate');

  // 1) Thử autoplay ở trạng thái muted (desktop sẽ chạy luôn)
  //    Mobile cũng được phép play khi muted.
  function tryMutedAutoplay() {
    if (!audio) return;
    audio.play().catch(() => {
      // Bị chặn => đợi người dùng chạm nút
    });
  }
  // Gọi sau khi DOM sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryMutedAutoplay, { once: true });
  } else {
    tryMutedAutoplay();
  }

  // 2) Khi người dùng tương tác: bỏ mute và play
  async function unlockAndPlay() {
    try {
      audio.muted = false;           // bật tiếng
      await audio.play();            // play trong ngữ cảnh thao tác user
      gate.classList.add('hidden');  // ẩn nút nếu thành công
    } catch (e) {
      // Nếu vẫn lỗi (mạng chậm), chờ canplay rồi thử lại
      const onReady = async () => {
        audio.removeEventListener('canplay', onReady);
        try {
          audio.muted = false;
          await audio.play();
          gate.classList.add('hidden');
        } catch {}
      };
      audio.addEventListener('canplay', onReady);
    }
  }

  // 3) Gán sự kiện cho nhiều kiểu tương tác (đảm bảo iOS/Android nhận)
  ['click','touchstart','pointerdown','keydown'].forEach(evt => {
    gate.addEventListener(evt, unlockAndPlay, { once: true, passive: true });
  });

  // 4) (Tùy chọn) nếu user chạm bất kỳ đâu trên trang thay vì bấm nút
  function globalUnlock() {
    unlockAndPlay();
    // bỏ listener sau lần đầu
    ['click','touchstart','pointerdown','keydown'].forEach(evt => {
      document.removeEventListener(evt, globalUnlock, { passive: true });
    });
  }
  ['click','touchstart','pointerdown','keydown'].forEach(evt => {
    document.addEventListener(evt, globalUnlock, { passive: true });
  });
})();

