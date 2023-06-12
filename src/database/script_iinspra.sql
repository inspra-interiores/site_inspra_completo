drop database inspra;
create database inspra;
use inspra;

create table usuario (
idusuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
email varchar(45),
senha varchar(45));

select * from usuario;
truncate usuario;

create table orcamento(
idorcamento int primary key auto_increment,
nome varchar(45),
telefone char(11),
email varchar(45),
metroQuadrado decimal(7,2),
tipo_imovel varchar(45), constraint chkorcamento check (tipo_imovel in('comercial','residencial')),
descricao varchar(300),
inicioProjeto date);

select * from orcamento;

create table projeto(
idprojeto int primary key auto_increment,
nome varchar(45),
ambiente varchar(45),
imagemUrl varchar(1000),
fkorcamento int, constraint fkorcamento foreign key (fkorcamento) references orcamento(idorcamento));

insert into projeto values
(null,'sala1','sala','https://imgur.com/aVjMcuT',null),
(null,'sala2','sala','https://imgur.com/ywE4zNM',null),
(null,'sala3','sala','https://imgur.com/HQlu8dJ',null),
(null,'sala4','sala','https://imgur.com/kyO7vBq',null),
(null,'sala5','sala','https://imgur.com/LDdjJFW',null),
(null,'sala6','sala','https://imgur.com/B2voSKn',null),
(null,'sala7','sala','https://imgur.com/SsQgA1u',null),
(null,'sala8','sala','https://imgur.com/uaL4QLt',null),
(null,'sala9','sala','https://imgur.com/0zVdlhl',null),
(null,'sala10','sala','https://imgur.com/tt2mrs6',null),
(null,'sala11','sala','https://imgur.com/VulhZFJ',null),
(null,'sala12','sala','https://imgur.com/iRWjgYb',null),

(null,'cozinha1','cozinha','https://imgur.com/CVriTiX',null),
(null,'cozinha2','cozinha','https://imgur.com/bsz5ol2',null),
(null,'cozinha3','cozinha','https://imgur.com/LA4VgZM',null),
(null,'cozinha4','cozinha','https://imgur.com/DTJ8nWU',null),
(null,'cozinha5','cozinha','https://imgur.com/ayfQxmf',null),
(null,'cozinha6','cozinha','https://imgur.com/H9rZIVj',null),
(null,'cozinha7','cozinha','https://imgur.com/GV1wYON',null),
(null,'cozinha8','cozinha','https://imgur.com/BG2KKqY',null),
(null,'cozinha9','cozinha','https://imgur.com/amjdMMM',null),
(null,'cozinha10','cozinha','https://imgur.com/c9g8gwy',null),
(null,'cozinha11','cozinha','https://imgur.com/P853GBb',null),
(null,'cozinha12','cozinha','https://imgur.com/Bge1fu4',null),

(null,'quarto1','quarto','https://imgur.com/btxwqcn',null),
(null,'quarto2','quarto','https://imgur.com/gallery/bkjb9NK',null),
(null,'quarto3','quarto','https://imgur.com/pr8pY28',null),
(null,'quarto4','quarto','https://imgur.com/gallery/ZDW3JSN',null),
(null,'quarto5','quarto','https://imgur.com/gallery/bM1WwfJ',null),
(null,'quarto6','quarto','https://imgur.com/gallery/toXq09p',null),
(null,'quarto7','quarto','https://imgur.com/gallery/m9DCwU4',null),
(null,'quarto8','quarto','https://imgur.com/gallery/i4mZoVk',null),
(null,'quarto9','quarto','https://imgur.com/gallery/zCEbHw3',null),
(null,'quarto10','quarto','https://imgur.com/gallery/gdq2eLM',null),
(null,'quarto11','quarto','https://imgur.com/gallery/csHTXXu',null),
(null,'quarto12','quarto','https://imgur.com/MZGGbon',null),

(null,'banheiro1','banheiro','https://imgur.com/gallery/JTF3ftr',null),
(null,'banheiro2','banheiro','https://imgur.com/gallery/miT6Lzn',null),
(null,'banheiro3','banheiro','https://imgur.com/gallery/KJzJ7UT',null),
(null,'banheiro4','banheiro','https://imgur.com/gallery/GEo9fYw',null),
(null,'banheiro5','banheiro','https://imgur.com/gallery/raPJAYm',null),
(null,'banheiro6','banheiro','https://imgur.com/OpJBMQr',null),
(null,'banheiro7','banheiro','https://imgur.com/gallery/fDneiKE',null),
(null,'banheiro8','banheiro','https://imgur.com/gallery/sfxKmk3',null),
(null,'banheiro9','banheiro','https://imgur.com/gallery/Bl6gU7g',null),
(null,'banheiro10','banheiro','https://imgur.com/gallery/yEf5kwP',null),
(null,'banheiro11','banheiro','https://imgur.com/gallery/6YBN8bP',null),
(null,'banheiro12','banheiro','https://imgur.com/Tt50N2C',null),

(null,'escritorio1','escritorio','https://imgur.com/gallery/zqPDCMH',null),
(null,'escritorio2','escritorio','https://imgur.com/gallery/nxTOBJS',null),
(null,'escritorio3','escritorio','https://imgur.com/gallery/Jpq8rLb',null),
(null,'escritorio4','escritorio','https://imgur.com/gallery/9grZfwV',null),
(null,'escritorio5','escritorio','https://imgur.com/gallery/gRjWlRC',null),
(null,'escritorio6','escritorio','https://imgur.com/gallery/RpmmGLw',null),
(null,'escritorio7','escritorio','https://imgur.com/gallery/04iYhCP',null),
(null,'escritorio8','escritorio','https://imgur.com/gallery/yKmcqgK',null),
(null,'escritorio9','escritorio','https://imgur.com/gallery/gb0Oxnn',null),
(null,'escritorio10','escritorio','https://imgur.com/gallery/sNFM3IV',null),
(null,'escritorio11','escritorio','https://imgur.com/gallery/FRHyanx',null),
(null,'escritorio12','escritorio','https://imgur.com/gallery/ECzmHWE',null),

(null,'areaServico1','area de servico','https://imgur.com/gallery/UBqivP7',null),
(null,'areaServico2','area de servico','https://imgur.com/gallery/zd7AETP',null),
(null,'areaServico3','area de servico','https://imgur.com/gallery/nfiCHoV',null),
(null,'areaServico4','area de servico','https://imgur.com/gallery/EnYVkOi',null),
(null,'areaServico5','area de servico','https://imgur.com/gallery/4gDAG7l',null),
(null,'areaServico6','area de servico','https://imgur.com/gallery/VJENlkx',null),
(null,'areaServico7','area de servico','https://imgur.com/gallery/6KAprdy',null),
(null,'areaServico8','area de servico','https://imgur.com/gallery/T5PUcGH',null),
(null,'areaServico9','area de servico','https://imgur.com/gallery/rksSiCF',null),
(null,'areaServico10','area de servico','https://imgur.com/gallery/buN0xsx',null),
(null,'areaServico11','area de servico','https://imgur.com/gallery/sekbDlB',null),
(null,'areaServico12','area de servico','https://imgur.com/gallery/FDQwSmY',null),

(null,'areaExterna1','area externa','https://imgur.com/gallery/rMKjGyM',null),
(null,'areaExterna2','area externa','https://imgur.com/gallery/cJI9t0e',null),
(null,'areaExterna3','area externa','https://imgur.com/gallery/Ks3MJGv',null),
(null,'areaExterna4','area externa','https://imgur.com/gallery/1h6FDwE',null),
(null,'areaExterna5','area externa','https://imgur.com/gallery/JzJh4JZ',null),
(null,'areaExterna6','area externa','https://imgur.com/gallery/YkEQjXP',null),
(null,'areaExterna7','area externa','https://imgur.com/gallery/GPoR8pK',null),
(null,'areaExterna8','area externa','https://imgur.com/gallery/IQFMMY3',null),
(null,'areaExterna9','area externa','https://imgur.com/XcCzNFu',null),
(null,'areaExterna10','area externa','https://imgur.com/gallery/6XxTooO',null),
(null,'areaExterna11','area externa','https://imgur.com/gallery/nHo6Z7R',null),
(null,'areaExterna12','area externa','https://imgur.com/gallery/Wp3R1sa',null),

(null,'entrada1','entrada','https://imgur.com/gallery/vBZ0GIn',null),
(null,'entrada2','entrada','https://imgur.com/gallery/b26QQ71',null),
(null,'entrada3','entrada','https://imgur.com/gallery/LfezJN3',null),
(null,'entrada4','entrada','https://imgur.com/gallery/lRU5MaK',null),
(null,'entrada5','entrada','https://imgur.com/gallery/yLTTlD1',null),
(null,'entrada6','entrada','https://imgur.com/gallery/N2C67GU',null),
(null,'entrada7','entrada','https://imgur.com/gallery/r0ZXU4M',null),
(null,'entrada8','entrada','https://imgur.com/gallery/ecWluWl',null),
(null,'entrada9','entrada','https://imgur.com/gallery/fKNDnih',null),
(null,'entrada10','entrada','https://imgur.com/gallery/IqJfcYh',null),
(null,'entrada11','entrada','https://imgur.com/gallery/tbPML9K',null),
(null,'entrada12','entrada','https://imgur.com/gallery/tGFUDnM',null);

select * from projeto;

create table pesquisa(
idpesquisa int primary key auto_increment,
design varchar(45),
fkrespondente int, constraint fkrespondente foreign key(fkrespondente) references usuario(idusuario));

insert into pesquisa values
(null,'minimalista',null),
(null,'contemporâneo',null),
(null,'industrial',null),
(null,'romântico',null),
(null,'rústico',null),
(null,'retrô',null),
(null,'clássico',null);
		
SELECT COUNT(usuario.idusuario) as voto, pesquisa.design as design
from usuario right join pesquisa on fkrespondente = idusuario
group by design;

                  
select * from pesquisa;






 

