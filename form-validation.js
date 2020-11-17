const form = document.getElementById('form');
const username = document.getElementById('name');
const review = document.getElementById('rev-text');

form.addEventListener( 'submit', checkInputs );

function checkInputs(event)
{
	const usernameValue = username.value.trim();
	const reviewValue = review.value;
	
    if(!usernameValue)
    {
		setErrorFor(username, 'Имя не может быть пустым');
		event.preventDefault();
    } else
    {
		setSuccessFor(username);
	}
	
    if(!reviewValue)
    {
		setErrorFor(review, 'Отзыв не может быть пустым');
		event.preventDefault();
    } 
    else
    {
		setSuccessFor(review);
	}
	
}

function setErrorFor(input, message)
{
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input)
{
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
