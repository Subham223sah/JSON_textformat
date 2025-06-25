
    function generateJSON() {
      const questionRaw = document.getElementById("questionText").value.trim();
      const question = questionRaw.replace(/\n/g, "\\n");

      const options = [];
      for (let i = 0; i < 4; i++) {
        const val = document.getElementById(`opt${i}`).value.trim();
        if (!val) {
          alert(`Option ${i + 1} is empty`);
          return;
        }
        options.push(val);
      }

      const answerIndex = parseInt(document.getElementById("correctIndex").value);
      if (isNaN(answerIndex) || answerIndex < 0 || answerIndex > 3) {
        alert("Please enter a valid answer index (0 to 3)");
        return;
      }

      const formatted = {
        question: question,
        options: options,
        answer: answerIndex
      };

      document.getElementById("output").textContent = JSON.stringify(formatted, null, 4);
      document.getElementById("copyMsg").style.display = "none";
    }

    function copyToClipboard() {
      const text = document.getElementById("output").textContent;
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        document.getElementById("copyMsg").style.display = "block";
        setTimeout(() => {
          document.getElementById("copyMsg").style.display = "none";
        }, 2000);
      });
    }
