<?php

$tarefa = $_POST["tarefa"];

// Redireciona passando a tarefa pela URL
header("Location: lista.php?tarefa=" . urlencode($tarefa));

exit();

?>