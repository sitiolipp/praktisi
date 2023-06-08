$(function () {

    $('.tombolTambahData').on('click', function () {
        $('#formModalLabel').html('Tambah Data Sparepart');
        $('.modal-footer button[type=submit]').html('Tambah Data');
        $('#nama').val('');
        $('#kodebarang').val('');
        $('#merk').val('');
        $('#jumlah').val('');
        $('#harga').val('');
        $('#id').val('');
    });


    $('.tampilModalUbah').on('click', function () {

        $('#formModalLabel').html('Ubah Data Toko');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action', 'http://localhost/toko_elektronik/public/home/ubah');

        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost/toko_elektronik/public/home/getubah',
            data: { id: id },
            method: 'post',
            dataType: 'json',
            success: function (data) {
                $('#nama').val(data.nama);
                $('#kodebarang').val(data.kodebarang);
                $('#merk').val(data.merk);
                $('#jumlah').val(data.jumlah);
                $('#harga').val(data.harga);
                $('#id').val(data.id);
            }
        });

    });

});

