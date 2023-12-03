document.querySelector("#loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const userObj = {
        username: document.querySelector("#loginUsername").value,
        password: document.querySelector("#loginPassword").value
    }
    fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.href = "/profile";
        } else {
            M.toast({html: 'Invalid Credentials', classes: 'rounded'} )
        }
    })

})

document.querySelector("#newUserForm").addEventListener("submit", e => {
    e.preventDefault();
    const userObj = {
        username: document.querySelector("#newUsername").value,
        password: document.querySelector("#newPassword").value,
        confirmPassword: document.querySelector("#confirmPassword").value
    }
    if (!userObj.password === userObj.confirmPassword) {
        alert("error")
    } else {
        fetch("/api/users/", {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.ok) {
                location.href = "/profile";
            } else {
                alert("trumpet sound")
            }
        })
    }
})